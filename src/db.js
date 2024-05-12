import mongoose from "mongoose";
import "dotenv/config"


export const conectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB
    );
    console.log(">>>>>DB is conected");
  } catch (error) {
    console.log(error);
  }
};
