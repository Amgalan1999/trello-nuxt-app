import UserModel from "~~/server/models/User.model";
import { UserSchema } from "~~/server/validation";

export default defineEventHandler(async event => {
    const body = await readBody(event)

    // let { error } = UserSchema.validate(body)
    // if (error) {
    //     throw createError({
    //         message: error.message.replace(/"/g, ""),
    //         statusCode: 400,
    //         fatal: false
    //     })
    // }

    // try {
    //     await UserModel.create(body)
    console.log(body)
        return { message: "Author created" }
    // } catch (e) {
    //     console.error(e, "api/author/create.post.ts Author model create")
    //     throw createError({
    //         message: "create error",
    //     })
    // }
})