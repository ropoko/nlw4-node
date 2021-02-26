import request from 'supertest';
import { app } from '../app';
import { getConnection } from 'typeorm';
import createConnection from '../database';

describe("users", () => {
    beforeAll(async() => {
        const con = await createConnection();
        await con.runMigrations();
    })
    
    afterAll(async() => {
        const con = getConnection();
        await con.dropDatabase();
        await con.close();
    })

    it('Should be able to create new user', async() => {
        const response = await request(app).post('/users').send({ 
            email: 'user@example.com',
            name: 'user example'
        })

        expect(response.status).toBe(201)
    })

    it('Should not be able to create new user', async() => {
        const response = await request(app).post('/users').send({ 
            email: 'user@example.com',
            name: 'user example'
        })

        expect(response.status).toBe(400)
    })
})
