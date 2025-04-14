import request from "supertest"
import { app } from "../app"

describe("POST /api/admin/login", () => {

    test("It should return 200 and a token", async () => {

        const response = await request(app)
            .post("/api/admin/login")
            .send({
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD
            })
        
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("token")
        expect(typeof response.body.token).toBe("string")
        expect(response.body.token.length).toBeGreaterThan(100)
    })

    test("It should fail login and return 401", async () => {

        const response = await request(app)
            .post("/api/admin/login")
            .send({
                username: "admin",
                password: "admin12345"
            })
        
        expect(response.status).toBe(401)
        expect(response.body).toHaveProperty("message")
        expect(typeof response.body.message).toBe("string")
        expect(response.body.message).toEqual("Not Authorized")
    })
})