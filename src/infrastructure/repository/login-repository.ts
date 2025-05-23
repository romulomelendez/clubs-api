import { prisma } from "../../presentation/helpers"

import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import { LoginRepositoryInterface } from "../../data/protocols"
import { Login } from "../../domain/models"

export class LoginRepository implements LoginRepositoryInterface {

    //@ts-ignore
    execute = async (login: Login) => {

        const { username, password } = login

        const admin = await prisma.admin.findUnique({
            where: {
                username
            }
        })

        if (!admin)
            return

        const isPasswordValid = await bcrypt.compare(password, admin.password)

        if (!isPasswordValid)
            return

        const token = jwt.sign(
            { id: admin.id },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        )

        return token
    }
}