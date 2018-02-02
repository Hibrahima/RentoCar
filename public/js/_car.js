function getCarDataAndSendToServer(){

	var carImage = $("#car_image")[0].files[0];
			if(carImage != null){
				var reader = new FileReader();
				reader.onload = function(evt){

					var image = evt.target.result;
					var car = {
						brand: $("#car_brand" ).val(),
						model: $("#car_model" ).val(),
						fuel: $("#car_fuel" ).val(),
						price: $("#car_price" ).val(),
						gearBox: $("#car_gear" ).val(),
						seat: $("#car_places" ).val(),
						image: image
					};

                    if(car.brand == "" || car.model == "" || car.fuel == "" || car.price == "" || car.gearBox == "" || car.seat == "")
                        $.notify("All fields are required. Please, try again !", "error");
                    else
                        sendCarDataToServer(car);
					
					
				};

				reader.readAsDataURL(carImage);
			}
            else{
                $.notify("You haven't uploaded the car's image", "error");
            }
}

function sendCarDataToServer(data){
	$.ajax({
		url: "/api/car/save",
		type: "POST",
		data: data,
		success: function(callback){
			if(callback === "Success"){
				$.notify("The car has been successfully added !", "success");
			}
			else
				$.notify("Oups, something went wrong", "error");

		},
		error: function(err){
			console.log("Error occured while saving user "+err);
			$.notify("Oups, something went wrong", "error");
		}
	})
}




//Read all cars and update front-end
function appendUpdateCarElements(cars){
    $("#content").empty();
    var content = $("#content");
    for(i=0; i<cars.length; i++){
    	var current = cars[i];
        var col1 = document.createElement("div");

        col1.className ="col-md-3"

        var col2 = document.createElement("div");

        col2.className ="col-md-9"

        var divtotal =document.createElement("div");
        divtotal.className ="clasDiv"

        // first row  image

        var carRowIm = document.createElement("div");
        carRowIm.className ="row"

        // second row update

        var carRowUp = document.createElement("div");
        carRowUp.className = "row"


        // col 2 is three rows with two columns each one

        var carRow1 = document.createElement("div");
        carRow1.className ="row"

        var carRow2 = document.createElement("div");
        carRow2.className ="row"

        var carRow3 = document.createElement("div");
        carRow3.className ="row"

        var carRow4 = document.createElement("div");
        carRow4.className ="row"

		var carRow5 = document.createElement("div");
        carRow5.className ="row"


        var carImage = document.createElement('img');
        carImage.className = "car_image";
        carImage.src = current.image;
        carImage.width = "100";
        carImage.height = "100";

        //Brand
        var brandLabel = document.createElement("label");
        brandLabel.innerHTML = "BRAND";
        brandLabel.className = "car_brand_label";

        var brandInput = document.createElement("input");
        brandInput.value = current.brand;
        brandInput.className = "btn car_brand_input";
        brandInput.id = "car_brand_input"+current._id;

        //Model
        var modelLabel = document.createElement("label");
        modelLabel.innerHTML = "MODEL";
        modelLabel.className = "car_model_label";

        var modelInput = document.createElement("input");
        modelInput.value = current.model;
        modelInput.className = "btn car_model_input";
        modelInput.id = "car_model_input"+current._id;

        //Fuel
        var fuelLabel = document.createElement("label");
        fuelLabel.innerHTML = "FUEL";
        fuelLabel.className = "car_fuel_label";

        var fuelInput = document.createElement("input");
        fuelInput.value = current.fuel;
        fuelInput.className = "btn car_fuel_input";
        fuelInput.id = "car_fuel_input"+current._id;

        //Price
        var priceLabel = document.createElement("label");
        priceLabel.innerHTML = "PRICE";
        priceLabel.className = "car_price_label";

        var priceInput = document.createElement("input");
        priceInput.value = current.price;
        priceInput.className = "btn car_price_input";
        priceInput.id = "car_price_input"+current._id;

        //GearBox
        var gearBoxLabel = document.createElement("label");
        gearBoxLabel.innerHTML = "GEAR BOX";
        gearBoxLabel.className = "car_brand_label";

        var gearBoxInput = document.createElement("input");
        gearBoxInput.value = current.gearBox;
        gearBoxInput.className = "btn car_gear_box_input";
        gearBoxInput.id = "car_gear_box_input"+current._id;

        //Seats
        var seatLabel = document.createElement("label");
        seatLabel.innerHTML = "SEAT";
        seatLabel.className = "car_seat_label";

        var seatInput = document.createElement("input");
        seatInput.value = current.seat;
        seatInput.className = "btn car_seat_input";
        seatInput.id = "car_seat_input"+current._id;

        //Button for update cars
        var updateButton = document.createElement("button");
        updateButton.innerHTML = "UPDATE";
        updateButton.className = "btn btn-warning update_button";
        updateButton.id = current._id;
        updateButton.onclick = function(e){
            var elementId = e.target.id;
            var answer = confirm("Are yous ure you want to update this item?");
            if(answer == true){
                updateCar(elementId);
                            
            }
        }


        //INPUT DATE
        var dateButton = '<input id="date" type="date" class="btn">';
        var dateLabel = document.createElement("label");
        dateLabel.innerHTML = "PICK UP";
        dateLabel.className = "car_dat_label";

        var dateButton2 = '<input id="date" type="date" class="btn">';
        var dateLabel2 = document.createElement("label");
        dateLabel2.innerHTML = "RETURN";
        dateLabel2.className = "car_dat_label2";


        //INSIDE ROW 1

        var carRow1Col1 = document.createElement("div");
        carRow1Col1.className="col-md-6"


        var carRow1Col1Label = document.createElement("div");
        carRow1Col1Label.className="col-md-3"
        carRow1Col1Label.append(brandLabel)

        var carRow1Col1Input = document.createElement("div");
        carRow1Col1Input.className="col-md-3"
        carRow1Col1Input.append(brandInput)

        carRow1Col1.append(carRow1Col1Label)
        carRow1Col1.append(carRow1Col1Input)
        carRow1.append(carRow1Col1)



        var carRow1Col2 = document.createElement("div");
        carRow1Col2.className="col-md-6"

        var carRow1Col2Label = document.createElement("div");
        carRow1Col2Label.className="col-md-3"
        carRow1Col2Label.append(fuelLabel)

        var carRow1Col2Input = document.createElement("div");
        carRow1Col2Input.className="col-md-3"
        carRow1Col2Input.append(fuelInput)

        carRow1Col2.append(carRow1Col2Label)
        carRow1Col2.append(carRow1Col2Input)
        carRow1.append(carRow1Col2)

        //INSIDE ROW 2

        var carRow2Col1 = document.createElement("div");
        carRow2Col1.className="col-md-6"

        var carRow2Col1Label = document.createElement("div");
        carRow2Col1Label.className="col-md-3"
        carRow2Col1Label.append(priceLabel)

        var carRow2Col1Input = document.createElement("div");
        carRow2Col1Input.className="col-md-3"
        carRow2Col1Input.append(priceInput)

        carRow2Col1.append(carRow2Col1Label)
        carRow2Col1.append(carRow2Col1Input)
        carRow2.append(carRow2Col1)


        var carRow2Col2 = document.createElement("div");
        carRow2Col2.className="col-md-6"


        var carRow2Col2Label = document.createElement("div");
        carRow2Col2Label.className="col-md-3"
        carRow2Col2Label.append(seatLabel)

        var carRow2Col2Input = document.createElement("div");
        carRow2Col2Input.className="col-md-3"
        carRow2Col2Input.append(seatInput)

        carRow2Col2.append(carRow2Col2Label)
        carRow2Col2.append(carRow2Col2Input)

        carRow2.append(carRow2Col2)

        //INSIDE ROW 3

        var carRow3Col1 = document.createElement("div");
        carRow3Col1.className="col-md-6"

        var carRow3Col1Label = document.createElement("div");
        carRow3Col1Label.className="col-md-3"
        carRow3Col1Label.append(gearBoxLabel)

        var carRow3Col1Input = document.createElement("div");
        carRow3Col1Input.className="col-md-3"
        carRow3Col1Input.append(gearBoxInput)

        carRow3Col1.append(carRow3Col1Label)
        carRow3Col1.append(carRow3Col1Input)

        carRow3.append(carRow3Col1)

        var carRow3Col2 = document.createElement("div");
        carRow3Col2.className="col-md-6"

        var carRow3Col2Label = document.createElement("div");
        carRow3Col2Label.className="col-md-3"
        carRow3Col2Label.append(modelLabel)

        var carRow3Col2Input = document.createElement("div");
        carRow3Col2Input.className="col-md-3"
        carRow3Col2Input.append(modelInput)

        carRow3Col2.append(carRow3Col2Label)
        carRow3Col2.append(carRow3Col2Input)

        carRow3.append(carRow3Col2)

        // INSIDE ROW 4


        var carRow4Col1 = document.createElement("div");
        carRow4Col1.className="col-md-6"
        var carRow4Col1Label = document.createElement("div");
        carRow4Col1Label.className="col-md-3"
        //carRow4Col1Label.append(dateLabel)

        var carRow4Col1Input = document.createElement("div");
        carRow4Col1Input.className="col-md-3"
        //carRow4Col1Input.innerHTML=dateButton;

        carRow4Col1.append(carRow4Col1Label)
        carRow4Col1.append(carRow4Col1Input)

        var carRow4Col2 = document.createElement("div");
        carRow4Col2.className="col-md-6"
        var carRow4Col2Label = document.createElement("div");
        carRow4Col2Label.className="col-md-3"
        //carRow4Col2Label.append(dateLabel2)

        var carRow4Col2Input = document.createElement("div");
        carRow4Col2Input.className="col-md-3"
        //carRow4Col2Input.innerHTML=dateButton2;

        carRow4Col2.append(carRow4Col2Label)
        carRow4Col2.append(carRow4Col2Input)

        carRow4.append(carRow4Col1)
        carRow4.append(carRow4Col2)

        var emptyLine = document.createElement("label");
        emptyLine.innerHTML = "      "+"<br>";
        var emptyLine2 = document.createElement("label");
        emptyLine2.innerHTML = "      "+"<br>";
        var emptyLine3 = document.createElement("label");
        emptyLine3.innerHTML = "      "+"<br>";
        var emptyLine4 = document.createElement("label");
        emptyLine4.innerHTML = "      "+"<br>";
        var emptyLine5 = document.createElement("label");
        emptyLine5.innerHTML = "      "+"<br>";
        var emptyLine6 = document.createElement("label");
        emptyLine6.innerHTML = "      "+"<br>";
        var emptyLine7 = document.createElement("label");
        emptyLine7.innerHTML = "      "+"<br>";
        carRow5.append(emptyLine)

        col2.append(emptyLine5)
        col2.append(carRow1)
        col2.append(emptyLine4)
        col2.append(carRow2)
        col2.append(emptyLine2)
        col2.append(carRow3)
        col2.append(emptyLine3)
		col2.append(carRow4)
        col2.append(carRow5)



        carRowIm.append(carImage)
        carRowUp.append(updateButton)

        col1.append(emptyLine7)
        col1.append(carRowIm)
        col1.append(emptyLine6)
        col1.append(carRowUp)


        divtotal.append(col2)
        divtotal.append(col1)
        content.append(divtotal)

    }

}

//-----------------------------------GET ALL CARS---------------------------------------------
function getCars(){
    $.ajax({
        url: "api/car/getAll",
        type: "GET",
        success: function(cars){
            appendUpdateCarElements(cars);
        },
        error: function(err){
            console.log("Error while getting list of cars");
            $.notify("Oups, something went wrong !", "error");
        }
    })
}

//------------------------------------ UPDATE CAR ----------------------------------------------
function updateCar(id){

    var car = {
        brand: $("#car_brand_input"+id).val(),
        model: $("#car_model_input"+id).val(),
        fuel: $("#car_fuel_input"+id).val(),
        price: $("#car_price_input"+id).val(),
        gearBox: $("#car_gear_box_input"+id).val(),
        seat: $("#car_seat_input"+id).val()
    };

     if(car.brand == "" || car.model == "" || car.fuel == "" || car.price == "" || car.gearBox == "" || car.seat == "")
         $.notify("All fields are required. Please, try again !", "error");
     else{
        $.ajax({
            url: "api/car/update/"+id,
            type: "PUT",
            data: {newCar: car},
            success: function(callback){
                if(callback === "Success"){
                    $.notify("The selected car has successfully been updated !", "success");
                }
            },
            error: function(err){
                console.log("Error while updating car : "+err);
                $.notify("Oups, something went wrong !", "error");
            }
        })

     }
}

//-------------------------- DELETE CAR -------------------------------------------------
function deleteCar(id){
    $.ajax({
        url: "api/car/delete/"+id,
        type: "DELETE",
        success: function(callback){
            if(callback === "Success"){
                alert("The selected car has successfully been deleted.");
                window.location.replace("/api");
            }
                 
       },
        error: function(err){
            console.log("Error while deleting car : "+err);
            $.notify("Oups, something went wrong !", "error")
        }
    })
}

//------------------------------------------------------------------------------------------
function appendDeleteCarElements(cars){
    $("#content").empty();
    var content = $("#content");
    for(i=0; i<cars.length; i++){
        var current = cars[i];
        var col1 = document.createElement("div");

        col1.className ="col-md-3"

        var col2 = document.createElement("div");

        col2.className ="col-md-9"

        var divtotal =document.createElement("div");
        divtotal.className ="clasDiv"

        // first row  image

        var carRowIm = document.createElement("div");
        carRowIm.className ="row"

        // second row update

        var carRowUp = document.createElement("div");
        carRowUp.className = "row"


        // col 2 is three rows with two columns each one

        var carRow1 = document.createElement("div");
        carRow1.className ="row"

        var carRow2 = document.createElement("div");
        carRow2.className ="row"

        var carRow3 = document.createElement("div");
        carRow3.className ="row"

		var carRow4 =document.createElement("div");
        carRow4.className="row"

        var carRow5 = document.createElement("div");
        carRow5.className ="row"


        var carImage = document.createElement('img');
        carImage.className = "car_image";
        carImage.src = current.image;
        carImage.width = "100";
        carImage.height = "100";


        //Brand
        var brandLabel = document.createElement("label");
        brandLabel.innerHTML = "BRAND";
        brandLabel.className = "car_brand_label";

        var brandInput = document.createElement("label");
        brandInput.innerHTML = current.brand;
        brandInput.className = "car_brand_label";

        //Model
        var modelLabel = document.createElement("label");
        modelLabel.innerHTML = "MODEL";
        modelLabel.className = "car_model_label";

        var modelInput = document.createElement("label");
        modelInput.innerHTML = current.model;
        modelInput.className = "car_model_label";

        //Fuel
        var fuelLabel = document.createElement("label");
        fuelLabel.innerHTML = "FUEL";
        fuelLabel.className = "car_fuel_label";

        var fuelInput= document.createElement("label");
        fuelInput.innerHTML = current.fuel;
        fuelInput.className = "car_fuel_label";

        //Price
        var priceLabel = document.createElement("label");
        priceLabel.innerHTML = "PRICE";
        brandLabel.className = "car_price_label";

        var priceInput = document.createElement("label");
        priceInput.innerHTML = current.price;
        priceInput.className = "car_price_label";

        //GearBox
        var gearBoxLabel = document.createElement("label");
        gearBoxLabel.innerHTML = "GEAR BOX";
        brandLabel.className = "car_brand_label";

        var gearBoxInput = document.createElement("label");
        gearBoxInput.innerHTML = current.gearBox;
        brandInput.className = "car_gear_box_label";

        //Seats
        var seatLabel = document.createElement("label");
        seatLabel.innerHTML= "SEAT";
        seatLabel.className = "car_seat_label";

        var seatInput  = document.createElement("label");
        seatInput .innerHTML= current.seat;
        seatInput .className = "car_seat_label";

        //Button for delete cars
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE";
        deleteButton.className = "btn btn-warning delete_button";
        deleteButton.id = current._id;
        deleteButton.onclick = function(e){
            var elementId = e.target.id;
            getCarReservationStatus(elementId, function(reservationStaus){
                if(reservationStaus == true)
                     $.notify("This car is already reserved, it cannot be deleted !", "info");
                 else{
                    var answer = confirm("Are yous ure you want to delete this item?");
                    if(answer == true){
                        deleteCar(elementId);                
                    }
                 }
            });
        }



        //INSIDE ROW 1

        var carRow1Col1 = document.createElement("div");
        carRow1Col1.className="col-md-6"


        var carRow1Col1Label = document.createElement("div");
        carRow1Col1Label.className="col-md-3"
        carRow1Col1Label.append(brandLabel)

        var carRow1Col1Input = document.createElement("div");
        carRow1Col1Input.className="col-md-3"
        carRow1Col1Input.append(brandInput)

        carRow1Col1.append(carRow1Col1Label)
        carRow1Col1.append(carRow1Col1Input)
        carRow1.append(carRow1Col1)



        var carRow1Col2 = document.createElement("div");
        carRow1Col2.className="col-md-6"

        var carRow1Col2Label = document.createElement("div");
        carRow1Col2Label.className="col-md-3"
        carRow1Col2Label.append(fuelLabel)

        var carRow1Col2Input = document.createElement("div");
        carRow1Col2Input.className="col-md-3"
        carRow1Col2Input.append(fuelInput)

        carRow1Col2.append(carRow1Col2Label)
        carRow1Col2.append(carRow1Col2Input)
        carRow1.append(carRow1Col2)

        //INSIDE ROW 2

        var carRow2Col1 = document.createElement("div");
        carRow2Col1.className="col-md-6"

        var carRow2Col1Label = document.createElement("div");
        carRow2Col1Label.className="col-md-3"
        carRow2Col1Label.append(priceLabel)

        var carRow2Col1Input = document.createElement("div");
        carRow2Col1Input.className="col-md-3"
        carRow2Col1Input.append(priceInput)

        carRow2Col1.append(carRow2Col1Label)
        carRow2Col1.append(carRow2Col1Input)
        carRow2.append(carRow2Col1)


        var carRow2Col2 = document.createElement("div");
        carRow2Col2.className="col-md-6"


        var carRow2Col2Label = document.createElement("div");
        carRow2Col2Label.className="col-md-3"
        carRow2Col2Label.append(seatLabel)

        var carRow2Col2Input = document.createElement("div");
        carRow2Col2Input.className="col-md-3"
        carRow2Col2Input.append(seatInput)

        carRow2Col2.append(carRow2Col2Label)
        carRow2Col2.append(carRow2Col2Input)

        carRow2.append(carRow2Col2)

        //INSIDE ROW 3

        var carRow3Col1 = document.createElement("div");
        carRow3Col1.className="col-md-6"

        var carRow3Col1Label = document.createElement("div");
        carRow3Col1Label.className="col-md-3"
        carRow3Col1Label.append(gearBoxLabel)

        var carRow3Col1Input = document.createElement("div");
        carRow3Col1Input.className="col-md-3"
        carRow3Col1Input.append(gearBoxInput)

        carRow3Col1.append(carRow3Col1Label)
        carRow3Col1.append(carRow3Col1Input)

        carRow3.append(carRow3Col1)

        var carRow3Col2 = document.createElement("div");
        carRow3Col2.className="col-md-6"

        var carRow3Col2Label = document.createElement("div");
        carRow3Col2Label.className="col-md-3"
        carRow3Col2Label.append(modelLabel)

        var carRow3Col2Input = document.createElement("div");
        carRow3Col2Input.className="col-md-3"
        carRow3Col2Input.append(modelInput)

        carRow3Col2.append(carRow3Col2Label)
        carRow3Col2.append(carRow3Col2Input)

        carRow3.append(carRow3Col2)

        // INSIDE ROW 4


        var carRow4Col1 = document.createElement("div");
        carRow4Col1.className="col-md-6"
        var carRow4Col1Label = document.createElement("div");
        carRow4Col1Label.className="col-md-3"
        //arRow4Col1Label.append(dateLabel)

        var carRow4Col1Input = document.createElement("div");
        carRow4Col1Input.className="col-md-3"
        //carRow4Col1Input.innerHTML=dateButton;

        carRow4Col1.append(carRow4Col1Label)
        carRow4Col1.append(carRow4Col1Input)

        var carRow4Col2 = document.createElement("div");
        carRow4Col2.className="col-md-6"
        var carRow4Col2Label = document.createElement("div");
        carRow4Col2Label.className="col-md-3"
        //carRow4Col2Label.append(dateLabel2)

        var carRow4Col2Input = document.createElement("div");
        carRow4Col2Input.className="col-md-3"
        //carRow4Col2Input.innerHTML=dateButton2;

        carRow4Col2.append(carRow4Col2Label)
        carRow4Col2.append(carRow4Col2Input)

        carRow4.append(carRow4Col1)
        carRow4.append(carRow4Col2)

        var emptyLine = document.createElement("label");
        emptyLine.innerHTML = "      "+"<br>";
        var emptyLine2 = document.createElement("label");
        emptyLine2.innerHTML = "      "+"<br>";
        var emptyLine3 = document.createElement("label");
        emptyLine3.innerHTML = "      "+"<br>";
        var emptyLine4 = document.createElement("label");
        emptyLine4.innerHTML = "      "+"<br>";
        var emptyLine5 = document.createElement("label");
        emptyLine5.innerHTML = "      "+"<br>";
        var emptyLine6 = document.createElement("label");
        emptyLine6.innerHTML = "      "+"<br>";
        var emptyLine7 = document.createElement("label");
        emptyLine7.innerHTML = "      "+"<br>";
        carRow5.append(emptyLine)

        col2.append(emptyLine5)
        col2.append(carRow1)
        col2.append(emptyLine4)
        col2.append(carRow2)
        col2.append(emptyLine2)
        col2.append(carRow3)
        col2.append(emptyLine3)
        col2.append(carRow4)
        col2.append(carRow5)



        carRowIm.append(carImage)

        carRowUp.append(deleteButton)

        col1.append(emptyLine7)
        col1.append(carRowIm)
        col1.append(emptyLine6)
        col1.append(carRowUp)

        divtotal.append(col2)
        divtotal.append(col1)
        content.append(divtotal)

    }

}
function deleteCars(){
    $.ajax({
        url: "api/car/getAll",
        type: "GET",
        success: function(cars){
            appendDeleteCarElements(cars);
        },
        error: function(err){
            console.log("Error while getting list of cars");
            $.notify("Oups, something went wrong !", "error");
        }
    })
}

function GetCarElements(cars){
    $("#content").empty();
    var content = $("#content");
    for(i=0; i<cars.length; i++){
        var current = cars[i];
        var col1 = document.createElement("div");

        col1.className ="col-md-3"

        var col2 = document.createElement("div");

        col2.className ="col-md-9"

        var divtotal =document.createElement("div");
        divtotal.className ="clasDiv"

        // first row  image

        var carRowIm = document.createElement("div");
        carRowIm.className ="row"

        // second row update

        var carRowUp = document.createElement("div");
        carRowUp.className = "row"


        // col 2 is three rows with two columns each one

        var carRow1 = document.createElement("div");
        carRow1.className ="row"

        var carRow2 = document.createElement("div");
        carRow2.className ="row"

        var carRow3 = document.createElement("div");
        carRow3.className ="row"

		var carRow4 = document.createElement("div");
        carRow4.className = "row"

        var carRow5 = document.createElement("div");
        carRow5.className = "row"

        var carRow6 = document.createElement("div");
        carRow6.className = "row"


        var carImage = document.createElement('img');
        carImage.className = "car_image";
        carImage.src = current.image;
        carImage.width = "100";
        carImage.height = "100";

        //Brand
        var brandLabel = document.createElement("label");
        brandLabel.innerHTML = "BRAND";
        brandLabel.className = "car_brand_label";

        var brandInput = document.createElement("label");
        brandInput.innerHTML = current.brand;
        brandInput.className = "car_brand_label";

        //Model
        var modelLabel = document.createElement("label");
        modelLabel.innerHTML = "MODEL";
        modelLabel.className = "car_model_label";

        var modelInput = document.createElement("label");
        modelInput.innerHTML = current.model;
        modelInput.className = "car_model_label";

        //Fuel
        var fuelLabel = document.createElement("label");
        fuelLabel.innerHTML = "FUEL";
        fuelLabel.className = "car_fuel_label";

        var fuelInput= document.createElement("label");
        fuelInput.innerHTML = current.fuel;
        fuelInput.className = "car_fuel_label";

        //Price
        var priceLabel = document.createElement("label");
        priceLabel.innerHTML = "PRICE";
        brandLabel.className = "car_price_label";

        var priceInput = document.createElement("label");
        priceInput.innerHTML = current.price;
        priceInput.className = "car_price_label";

        //GearBox
        var gearBoxLabel = document.createElement("label");
        gearBoxLabel.innerHTML = "GEAR BOX";
        brandLabel.className = "car_brand_label";

        var gearBoxInput = document.createElement("label");
        gearBoxInput.innerHTML = current.gearBox;
        brandInput.className = "car_gear_box_label";

        //Seats
        var seatLabel = document.createElement("label");
        seatLabel.innerHTML= "SEAT";
        seatLabel.className = "car_seat_label";

        var seatInput  = document.createElement("label");
        seatInput .innerHTML= current.seat;
        seatInput .className = "car_seat_label";

        //Button for reserve the cars
        var reserveButton = document.createElement("button");
        reserveButton.innerHTML = "RESERVE";
        reserveButton.className = "btn btn-warning reserve_button";
        reserveButton.id = current._id;
        if(current.reservationStatus == true)
            reserveButton.disabled = true;

        reserveButton.onclick = function(e){
            if(!getCookieByName("user type") || getCookieByName("user type") === "")
                alert("You have to log into the system in order to make reservation");
            else{
                 var elementId = e.target.id;
                 var answer = confirm("Are you sure you want to reserve this item?");
                 if(answer == true){

                    makeReservation(elementId); // From _user.js          
                } 
            }
            

        }

        //INPUT DATE
        var dateButton = '<input type="date" id="pick_up_date_123" class="btn">';
       
        var dateLabel = document.createElement("label");
        dateLabel.innerHTML = "PICK UP";
        dateLabel.className = "car_dat_label";

        var dateButton2 = '<input type="date" id="return_date_123" class="btn">';
        dateButton2.id = "return_date"+current._id;
        var dateLabel2 = document.createElement("label");
        dateLabel2.innerHTML = "RETURN";
        dateLabel2.className = "car_dat_label2";


        //INSIDE ROW 1

        var carRow1Col1 = document.createElement("div");
        carRow1Col1.className="col-md-6"


        var carRow1Col1Label = document.createElement("div");
        carRow1Col1Label.className="col-md-3"
        carRow1Col1Label.append(brandLabel)

        var carRow1Col1Input = document.createElement("div");
        carRow1Col1Input.className="col-md-3"
        carRow1Col1Input.append(brandInput)

        carRow1Col1.append(carRow1Col1Label)
        carRow1Col1.append(carRow1Col1Input)
        carRow1.append(carRow1Col1)




        var carRow1Col2 = document.createElement("div");
        carRow1Col2.className="col-md-6"

        var carRow1Col2Label = document.createElement("div");
        carRow1Col2Label.className="col-md-3"
        carRow1Col2Label.append(fuelLabel)

        var carRow1Col2Input = document.createElement("div");
        carRow1Col2Input.className="col-md-3"
        carRow1Col2Input.append(fuelInput)

        carRow1Col2.append(carRow1Col2Label)
        carRow1Col2.append(carRow1Col2Input)
        carRow1.append(carRow1Col2)

        //INSIDE ROW 2

        var carRow2Col1 = document.createElement("div");
        carRow2Col1.className="col-md-6"

        var carRow2Col1Label = document.createElement("div");
        carRow2Col1Label.className="col-md-3"
        carRow2Col1Label.append(priceLabel)

        var carRow2Col1Input = document.createElement("div");
        carRow2Col1Input.className="col-md-3"
        carRow2Col1Input.append(priceInput)

        carRow2Col1.append(carRow2Col1Label)
        carRow2Col1.append(carRow2Col1Input)
        carRow2.append(carRow2Col1)


        var carRow2Col2 = document.createElement("div");
        carRow2Col2.className="col-md-6"


        var carRow2Col2Label = document.createElement("div");
        carRow2Col2Label.className="col-md-3"
        carRow2Col2Label.append(seatLabel)

        var carRow2Col2Input = document.createElement("div");
        carRow2Col2Input.className="col-md-3"
        carRow2Col2Input.append(seatInput)

        carRow2Col2.append(carRow2Col2Label)
        carRow2Col2.append(carRow2Col2Input)

        carRow2.append(carRow2Col2)

        //INSIDE ROW 3

        var carRow3Col1 = document.createElement("div");
        carRow3Col1.className="col-md-6"

        var carRow3Col1Label = document.createElement("div");
        carRow3Col1Label.className="col-md-3"
        carRow3Col1Label.append(gearBoxLabel)

        var carRow3Col1Input = document.createElement("div");
        carRow3Col1Input.className="col-md-3"
        carRow3Col1Input.append(gearBoxInput)

        carRow3Col1.append(carRow3Col1Label)
        carRow3Col1.append(carRow3Col1Input)

        carRow3.append(carRow3Col1)

        var carRow3Col2 = document.createElement("div");
        carRow3Col2.className="col-md-6"

        var carRow3Col2Label = document.createElement("div");
        carRow3Col2Label.className="col-md-3"
        carRow3Col2Label.append(modelLabel)

        var carRow3Col2Input = document.createElement("div");
        carRow3Col2Input.className="col-md-3"
        carRow3Col2Input.append(modelInput)

        carRow3Col2.append(carRow3Col2Label)
        carRow3Col2.append(carRow3Col2Input)


        carRow3.append(carRow3Col2)

		// INSIDE ROW 4


        var carRow4Col1 = document.createElement("div");
        carRow4Col1.className="col-md-6"
        var carRow4Col1Label = document.createElement("div");
        carRow4Col1Label.className="col-md-3"
        carRow4Col1Label.append(dateLabel)

        var carRow4Col1Input = document.createElement("div");
        carRow4Col1Input.className="col-md-3"
        carRow4Col1Input.innerHTML=dateButton;

        carRow4Col1.append(carRow4Col1Label)
        carRow4Col1.append(carRow4Col1Input)

        var carRow4Col2 = document.createElement("div");
        carRow4Col2.className="col-md-6"
        var carRow4Col2Label = document.createElement("div");
        carRow4Col2Label.className="col-md-3"
        carRow4Col2Label.append(dateLabel2)

        var carRow4Col2Input = document.createElement("div");
        carRow4Col2Input.className="col-md-3"
        carRow4Col2Input.innerHTML=dateButton2;

        carRow4Col2.append(carRow4Col2Label)
        carRow4Col2.append(carRow4Col2Input)

		carRow4.append(carRow4Col1)
		carRow4.append(carRow4Col2)

        var emptyLine = document.createElement("label");
        emptyLine.innerHTML = "      "+"<br>";
        var emptyLine2 = document.createElement("label");
        emptyLine2.innerHTML = "      "+"<br>";
        var emptyLine3 = document.createElement("label");
        emptyLine3.innerHTML = "      "+"<br>";
        var emptyLine4 = document.createElement("label");
        emptyLine4.innerHTML = "      "+"<br>";
        var emptyLine5 = document.createElement("label");
        emptyLine5.innerHTML = "      "+"<br>";
         var emptyLine6 = document.createElement("label");
        emptyLine6.innerHTML = "      "+"<br>";
        var emptyLine7 = document.createElement("label");
        emptyLine7.innerHTML = "      "+"<br>";
        carRow5.append(emptyLine)

        col2.append(emptyLine5)
        col2.append(carRow1)
        col2.append(emptyLine4)
        col2.append(carRow2)
        col2.append(emptyLine2)
        col2.append(carRow3)
        col2.append(emptyLine3)
        col2.append(carRow4)
        col2.append(carRow5)




        carRowIm.append(carImage)
        carRowUp.append(reserveButton)

        col1.append(emptyLine7)
        col1.append(carRowIm)
        col1.append(emptyLine6)
        col1.append(carRowUp)


        divtotal.append(col2)
        divtotal.append(col1)
        content.append(divtotal)

        document.getElementById("pick_up_date_123").id = "pick_up_date"+current._id;
        document.getElementById("return_date_123").id = "return_date"+current._id;

    }

}
function reserveCars(){
    $.ajax({
        url: "api/car/getAll",
        type: "GET",
        success: function(cars){
            GetCarElements(cars);
        },
        error: function(err){
            $.notify("Oups, something went wrong !", "error");
            console.log("Error while getting list of cars");
        }
    })
}

function getCarReservationStatus(carId, fn){
    $.ajax({
        url: "api/car/getReservationStatus/"+carId,
        success: function(reservationStatus){
            console.log("reservationStatus : "+reservationStatus);
            fn(reservationStatus);
        },
        error: function(err){
            $.notify("Oups, something went wrong !", "error");
            console.log("Error while getting car's reservatiion status");
        }
    })
}

