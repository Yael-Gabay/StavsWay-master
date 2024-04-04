import mongoose from 'mongoose'
import dotenv from 'dotenv'
require('dotenv').config()

dotenv.config()

const connectDB = async ()=> {
    try {
        
        console.log(process.env.MONGO_URI);
        
        // if(!process.env.MONGO_URI) throw new Error('No mongo uri found')

        await mongoose.connect('mongodb+srv://stavsway:Bc0542616007@cluster0.9faermb.mongodb.net/')
    }catch(err){
        console.error(err)
    }
    
}

connectDB()