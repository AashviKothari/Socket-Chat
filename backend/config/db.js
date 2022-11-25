const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO,{
            useNewUrlParser: true,
            // useUnifiedTopolgy: true,
            // useFindAndModify: true,
        })

        console.log(`MOngodb connected ${conn.connect.host}`)
    } catch(error){
        console.log(`Error: ${error.message}`);
        process.exit()
    }
}

module.exports = connectDB