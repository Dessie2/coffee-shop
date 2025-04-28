import mongoose from "mongoose";

export const connectDB = async () => {

 await mongoose.connect('mongodb+srv://stackde:dessie21@cluster0.xkijl66.mongodb.net/coffe-Shop').then(()=>console.log("DB Connected"));

}