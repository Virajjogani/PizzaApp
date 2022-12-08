import mongoose from 'mongoose'


const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected successfully");
});

export default dbConnect