var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarSchema = new Schema({
	brand: String,
	model: String,
	fuel: String,
	price: Number,
	gearBox: String,
	seat: Number,
	image: String,
	reservationStatus: {type: Boolean, default: false}
});

module.exports = mongoose.model("Car", CarSchema);