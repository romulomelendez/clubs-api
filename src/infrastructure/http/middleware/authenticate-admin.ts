import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const getToken = (request: Request): string | undefined => request.headers.authorization?.split(" ")[1]

export const AuthenticateAdmin = (req: Request, res: Response, next: NextFunction) => {

    const SECRET = process.env.JWT_SECRET as string
    const token = getToken(req)

    if(!token)
        return res.status(403).json({ message: "Acesso negado. Nenhum token fornecido." })
    
    try {

        const decoded = jwt.verify(token, SECRET)
        req.admin = decoded

        next()
    } catch (error) {
        return res.status(401).json({ message: "Token inválido ou expirado." })
    }
}