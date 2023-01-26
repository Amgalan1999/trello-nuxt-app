import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
})

export default mongoose.model("Card", schema)