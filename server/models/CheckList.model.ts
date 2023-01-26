import mongoose from "mongoose"

const schema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board"
    },
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        red: "Card"
    }
})

export default mongoose.model("CheckList", schema)