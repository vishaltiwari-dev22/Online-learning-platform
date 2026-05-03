import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI || "";

export const connectDB = async () => {
  if (!mongoUri) {
    console.error("❌ DB connection error: MONGODB_URI or MONGO_URI is not set.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ DB connected");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  }
};