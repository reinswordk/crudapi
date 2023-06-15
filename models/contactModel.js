const mongoose = require("mongoose");

const contactScheme = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add the contact First Name!"],
    },
    lastName: {
        type: String,
        required: [true, "Please add the contact Last Name!"],
    },
    numberPhone: {
        type: String,
        required: [true, "Please add the contact Phone Number!"],
    },
    address: {
        type: String,
        required: [true, "Please add the contact address!"],
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactScheme);