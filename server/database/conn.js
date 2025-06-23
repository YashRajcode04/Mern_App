import mongoose from "mongoose";
import ENV from "../config.js";

async function connect() {
  console.log("🔐 URI from config:", ENV.ATLAS_URI);
  console.log("🚀 Attempting to connect to MongoDB...");

  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(ENV.ATLAS_URI);

    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Failed to connect to database:", error.message);
  }
}

export default connect;
