import mongoose from "mongoose";

export default async () => {
    const config = useRuntimeConfig()

    mongoose.connect(config.MONGO_URI).then((result) => {
        console.log(`Connected to DB`)
    }).catch((err) => {
        console.error(err, "mongo connection error")
    });
}