import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minLength: [6,"Password must be at least 6 characters"]
    },
});

mongoose.models = {};

export const User = mongoose.model("User", schema);
