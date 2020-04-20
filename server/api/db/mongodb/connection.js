
const mongoose = require("mongoose");

const connectDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true
        });
        console.log("mongodb");
        
    }
    catch(err){
        console.log(err);
    }
    

}

module.exports=connectDatabase;