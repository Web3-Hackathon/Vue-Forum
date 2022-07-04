const dbConfig = require("../db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./schema.js")(mongoose);
module.exports = db;