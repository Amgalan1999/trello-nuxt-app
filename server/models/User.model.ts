import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    public_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    }
}, { timestamps: true })

export default mongoose.model("User", schema)