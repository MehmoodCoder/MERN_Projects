import mongoose from "mongoose";

async function connectDB(url: any) {
    await mongoose.connect(url)
}

export default connectDB