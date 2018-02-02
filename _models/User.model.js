var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//name, type, duration, plantingDate, bioStatus){
var UserSchema = new Schema({
	name: String,
	surname: String,
	birthday: String,
	email: String,
	password: String,
	drivingLicence: String,
	address: String,
	city: String,
	zip: Number,
	type: {type: String, default: "user"},
	card:{
		country: String,
		cardNumber: Number,
		expirationDate: String,
		cvCode: Number
	},
	reservations: [{
		pickUpDate : String,
		returnDate: String,
		car: {type: Schema.Types.ObjectId, ref: "Car"}
	}]

});

module.exports = mongoose.model("User", UserSchema);