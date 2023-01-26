import mongoose from "mongoose"

const schema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["complete", "incomplete"],
        default: "complete"
    }
})

export default mongoose.model("CheckListItem", schema)