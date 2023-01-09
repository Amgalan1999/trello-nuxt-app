import mongoose from "mongoose";

export default async () => {
    const config = useRuntimeConfig()

    mongoose.connect(config.DATABASE_URL).then((result) => {
        console.log(`Connected to DB`)
    }).catch((err) => {
        console.error(err, "mongo connection error")
    });
}