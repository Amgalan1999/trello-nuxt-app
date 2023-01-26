import mongoose from "mongoose"

const schema: mongoose.Schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    type: {
        type: String,
        enum: ["addCheckListToCard", "updateCheckItemStateOnCard", "createCard", "updateCard", "deleteCard", "addCheckListItem", "updateCheckListItem",]
    }
}, { timestamps: true })

export default mongoose.model("Activity", schema)