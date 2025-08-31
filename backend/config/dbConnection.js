const mongoose = require("mongoose");

async function connectDB (uri){
    try {
        mongoose.connect(uri);
        console.log("MongoDB connected")
    } catch (error) {
        console.error(error.msg);
        process.exit(1);
    }
}

module.exports = connectDB;