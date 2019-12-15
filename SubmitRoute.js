// import mongoose from "mongoose";
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    list: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//export the model and the schema it will use
const PostModel = mongoose.model("Posts", PostSchema);
module.exports = PostModel;
