const mongoose = require('mongoose');

const profileschema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    serverID: {type: String, require: true},
    strike: { type: Number, default: 0 },
});

const model = mongoose.model("ProfileModels", profileschema);

module.exports = model;