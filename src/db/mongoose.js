require("dotenv").config();
const mongoose = require("mongoose");

const dbconnect = async()=>{
    try {
        mongoose.connect(process.env.NOTER_MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        })
        console.log("DB is Connected.")
    } catch (error) {
        console.log(error,"Internal Server Error!!!!!");
    }
}

module.exports = dbconnect;