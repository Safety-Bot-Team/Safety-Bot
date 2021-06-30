const mongoose = require('mongoose');

const profileschema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    serverID: {type: String, require: true},
    contact: {type: String},
    country: {type: String, default: "Null"},
    strike: {type: Number, default: 0},
    textforu: {type: String, default: "Null"},
});

const model = mongoose.model("ProfileModels", profileschema);

module.exports = model;