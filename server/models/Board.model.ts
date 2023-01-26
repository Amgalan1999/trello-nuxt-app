import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isClosed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("Board", schema)