const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        public_key:String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
