import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    background: String,
    createdUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })