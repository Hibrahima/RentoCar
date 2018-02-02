var User = require("./../_models/User.model");
var Car = require("./../_models/Car.model");
var bcrypt = require("bcrypt");
const saltRounds = 10;

//resultCode 001 : User already exist
exports.saveUser =  function (data, fn){
	doesUserAlreadyExist(data.email, function(result){
		if(result.resultCode == true)
			fn({resultCode: "001", message: "User email does already exist. Please, log in instead"});
		else{
			var hashedPassword;
			cryptPassword(data.password, function(callback){
				if(callback.resultCode == true){
					hashedPassword = callback.result;
					data.password = hashedPassword;
					User.create(data, function(err, user){
						if(err){
							fn("Error");
						}
						else
							fn("Success");
					});
				}
			});
		}
	});
	
};

//resultCode 002 : User Not Found
function doesUserAlreadyExist(userEmail, callback){
	var found = false; var user;
	User.find({}, function(err, users){
		for(i=0; i<users.length; i++){
			if(users[i].email === userEmail){
				found = true; user = users[i];
				break;
			}
		}

		callback({resultCode: found, result: user});

	});

}

function cryptPassword(plainPassword, callback){
	bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
	  if(err)
	  	callback({resultCode: false, result: err});
	  else
	  	callback({resultCode: true, result: hash});
	});
}

//resultCode 005 : Cannot compare password
//resultCode 006 : Can compare password
//resultCode 002 : User Not Found
function comparePassword(plainPassword, dbPassword, callback){
	bcrypt.compare(plainPassword, dbPassword, function(err, res) {
		if(err)
			callback({resultCode: "005", result: err});
		else{
			if(res == true)
				callback({resultCode: "006", result: true});
			else
				callback({resultCode: "006", result: false});
		}
	});
}

//resultCode 007: Can log into the system
exports.login = function(userEmail, plainPassword, callback){
	doesUserAlreadyExist(userEmail, function(cbak){
		if(cbak.resultCode == true){
			comparePassword(plainPassword, cbak.result.password, function(res){
				if(res.result == true)
					callback({resultCode: true, message: "Can log in", userType: cbak.result.type, userId: cbak.result._id, username: cbak.result.name, surname: cbak.result.surname});
				else
					callback({resultCode: false, message: "Cannot log in"});
			});
		}
		else
			callback({resultCode: false, message: "Cannot log in"});

	});
	
}


//************************************CRUD FOR CARS***************************************************
exports.saveCar =  function (data, fn){
	Car.create(data, function(err, car){
		if(err){
			fn("Error");
		}
		else
			fn("Success");
	});
	
	
};

exports.getAllCars = function(fn){
	Car.find({}, function(err, cars){
		if(err)
			console.log("On server side, error while getting list of cars : "+err);
		else
			fn(cars);
	});
}

exports.updateCar = function(id, newCar, fn){
	Car.findOne({_id: id}, function(err, car){
		if(err){
			fn("Error");
		}
		else{
			if(!car)
				fn("Car not found");
			else{
				car.brand = newCar.brand,
				car.model = newCar.model;
				car.fuel = newCar.fuel;
				car.price = newCar.price;
				car.gearBox = newCar.gearBox;
				car.seat = newCar.seat;

				//Updating
				car.save(function(err, updatedCar){
					if(err)
						fn("Error");
					else
						fn("Success");
				})
			}

		}
	});
}

exports.deleteCar = function(id, fn){
	Car.findOneAndRemove({_id: id}, function(err, car){
		if(err)
			fn("Error");
		else
			fn("Success");
	})
}


//------------------------------------------ RESERVATIONS ----------------------------------------
exports.getCarById = function(id, fn){
	Car.findOne({_id: id}, function(err, car){
		if(err)
			fn("Error");
		else
			fn(car);
	});
}

exports.makeReservation = function(reservation, userId, carId, fn){
	User.findOne({_id:userId}, function(err, user){
		if(err)
			fn("Error");
		else{
			//Puhing the new reservation to the user's reservation list
			user.reservations.push(reservation);
			//Updating user
			user.save(function(err, user){
				if(err)
					fn("Error");
			})
			//Changing car's status
			Car.findOne({_id: carId}, function(err, car){
				if(err)
					fn("Error");
				else{
					car.reservationStatus = true;
					//Updating status
					car.save(function(err, updatedCar){
						if(err)
							fn("Error");
						else
							fn("Success");
					})
					
				}
			})
		}
	})

}

function get_Car_ById(id, fn){
	Car.findOne({_id: id}, function(err, car){
		if(err)
			fn("Error");
		else
			fn(car);
	});
}

exports.getSimpleUserReservations = function(id, fn){
	//var cars = [];
	User.findOne({_id: id})
	.populate('reservations')
	.exec(function(err, result) {
		if(err)
			fn("Error : "+err);
		else{
			fn(result);
		}
	});
}

exports.deleteReservation = function(userId, carId, fn){
	User.findOne({_id: userId})
	.populate('reservations')
	.exec(function(err, result) {
		if(err)
			fn("Error : "+err);
		else{

			for(i=0; i<result.reservations.length; i++){
				if(result.reservations[i].car == carId ){
					result.reservations.splice(i, 1);
					break;
				}
			}
			get_Car_ById(carId, function(car){
				car.reservationStatus = false;
				car.save(function(err, updatedCar){
					if(err)
						fn("Error : "+err);
				});
			});

			result.save(function(err, u){
				if(err)
					fn("Error : "+err);
				else
					fn("Success");

			});
				
			
		}
	});

}

//-----------------------------------------------------NEW-----------------------------------------------

exports.updateReservation = function(userId, carId, newReservation, fn){
	User.findOne({_id: userId})
	.populate('reservations')
	.exec(function(err, result) {
		if(err)
			fn("Error : "+err);
		else{
			for(i=0; i<result.reservations.length; i++){
				if(result.reservations[i].car == carId ){
					result.reservations[i].pickUpDate = newReservation.pickUpDate;
					result.reservations[i].returnDate = newReservation.returnDate;
					break;
				}
						
			}
			result.save(function(err, u){
				if(err)
					fn("Error : "+err);
				else
					fn("Success");

			});
				
			
		}
	});

}

exports.getCarReservationStatus = function(carId, fn){
	Car.findOne({_id: carId}, function(err, car){
		if(err)
			fn("Error : "+err);
		else
			fn(car.reservationStatus);
	})
}


