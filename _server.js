var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var dbHandler = require("./_database/db");
var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);
app.use(express.static('public'));

var dbURI = "mongodb://admin:admin@ds251737.mlab.com:51737/car_rent";
mongoose.connect(dbURI);

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("Server listening on port "+port);
});

//On a GET request to the root path "/api" send index2.html file as response to the client
router.get("/", function(req, res){
	res.sendFile(path.join(__dirname+"/index2.html"));
});

router.post("/user/save", function(req, res){
	var user = req.body;
	dbHandler.saveUser(user, function(callback){
		res.send(callback);
	});
});

router.post("/user/login", function(req, res){
	var data = req.body;
	dbHandler.login(data.email, data.password, function(callback){
		res.send(callback);
	});

})


//*******************************************CRUD FOR CARS******************************************
router.post("/car/save", function(req, res){
	var data = req.body;
	dbHandler.saveCar(data, function(callback){
		res.send(callback);
	});

})

router.get("/car/getAll", function(req, res){
	dbHandler.getAllCars(function(cars){
		res.send(cars);
	});
})

router.put("/car/update/:id", function(req, res){
	var newCar = req.body.newCar;
	var id = req.params.id;
	dbHandler.updateCar(id, newCar, function(callback){
		res.send(callback);
	})
})

router.delete("/car/delete/:id", function(req, res){
	var id = req.params.id;
	dbHandler.deleteCar(id, function(callback){
		res.send(callback);
	});
})

router.get("/car/get/:id", function(req, res){
	var id = req.params.id;
	dbHandler.getCarById(id, function(car){
		res.send(car);
	})
})

router.post("/reservation/add", function(req, res){
	var reservation = req.body.reservation;
	var userId = req.body.userId;
	var carId = req.body.carId;
	dbHandler.makeReservation(reservation, userId, carId, function(callback){
		res.send(callback);
	})
})

router.post("/user/reservation/getAll/:id", function(req, res){
	var userId = req.params.id;
	dbHandler.getSimpleUserReservations(userId, function(user){
		res.send(user);
	})
})

router.delete("/reservation/delete/:id", function(req, res){
	var userId = req.body.userId;
	var carId = req.params.id;
	dbHandler.deleteReservation(userId, carId, function(callback){
		res.send(callback);
	})
})

router.put("/reservation/update/:id", function(req, res){
    var userId = req.body.userId;
    var carId = req.params.id;
    var newReservation = req.body.reservation;
    dbHandler.updateReservation(userId, carId, newReservation, function(callback){
        res.send(callback);
    })
})

router.get("/car/getReservationStatus/:id", function(req, res){
	var carId = req.params.id;
	dbHandler.getCarReservationStatus(carId, function(getReservationStatus){
		res.send(getReservationStatus);
	})
})
