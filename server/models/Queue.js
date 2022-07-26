const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const queueSchema = new Schema(
  {
    queueId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    note: {
      type: String,
      required: false,
    },
    customers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Queue = model("Queue", queueSchema);

module.exports = Queue;
