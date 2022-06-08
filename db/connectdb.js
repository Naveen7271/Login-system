import { connect } from "http2";
import mongoose from "mongoose";
const connectDB = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS ={
            dbName: 'blogdb',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected Sucessfully..');
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB