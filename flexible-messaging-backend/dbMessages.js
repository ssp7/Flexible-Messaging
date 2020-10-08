import mongoose from "mongoose";

const flexibleMessagingSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  recieved: Boolean,
});

export default mongoose.model("messagecontent", flexibleMessagingSchema);
