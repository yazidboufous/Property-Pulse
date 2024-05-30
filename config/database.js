import mongoose from "mongoose";

let connected = "false";

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //If db is already connected, don't connect again
  if (connected === "true") {
    console.log("Mongodb is already connected");
    return;
  }

  //Connect to MongoDb
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = "true";
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
    process.exit();
  }
};

export default connectDB;
