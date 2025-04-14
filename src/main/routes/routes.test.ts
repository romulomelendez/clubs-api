import request from "supertest"
import { app } from "../app"

describe("POST /api/admin/login", () => {

    test("It should return 200 and a token", async () => {

        const loginResponse = await request(app)
            .post("/api/admin/login")
            .send({
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD
            })
        
        expect(loginResponse.status).toBe(200)
        expect(loginResponse.body).toHaveProperty("token")
        expect(typeof loginResponse.body.token).toBe("string")
        expect(loginResponse.body.token.length).toBeGreaterThan(100)
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

describe("GET /api/admin/club/:clubName", () => {

    let token: string

    beforeAll( async () => {
        console.log("TEST ADMIN CREDENTIALS >>> ", process.env.TEST_ADMIN_USERNAME, process.env.TEST_ADMIN_PASSWORD)
        const loginResponse = await request(app)
            .post("/api/admin/login")
            .send({
                username: process.env.TEST_ADMIN_USERNAME,
                password: process.env.TEST_ADMIN_PASSWORD
            })        
        token = loginResponse.body.token
    })

    test("It should return 200 and a Flamengo Club", async () => {
        
        const { status, body } = await request(app)
            .get("/api/admin/club/Flamengo")
            .set("Authorization", `Bearer ${token}`)

        expect(status).toBe(200)
        expect(body.clubFound.name).toEqual("Flamengo")
        expect(body).toHaveProperty("message")
        expect(body.message).toEqual("Club Found")
    })

    test("It should return 404 and a Not Found message", async () => {

        const { status, body } = await request(app)
            .get("/api/admin/club/flamengo")
            .set("Authorization", `Bearer ${token}`)

        expect(status).toBe(404)
        expect(body.clubFound).toBeUndefined()
        expect(body).toHaveProperty("message")
        expect(body.message).toEqual("Not Found")
    })
})