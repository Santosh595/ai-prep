const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
},{ timestamps }
)

const User = model("User",userSchema);

module.exports = User;