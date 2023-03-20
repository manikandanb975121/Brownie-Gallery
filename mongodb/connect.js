import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => { console.log('Mongoose Connect')})
    .catch((err) => console.log(err));
}


export default connectDB;