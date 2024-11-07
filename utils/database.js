import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('mongodb is connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)

    isConnected = true;
    console.log('mongodb is connected');
  } catch (error) {
    console.error('failed to connect to mongodb', error);
  }
}
