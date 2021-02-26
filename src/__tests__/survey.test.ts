import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database';

describe("surveys", () => {
    beforeAll(async() => {
        const con = await createConnection();
        await con.runMigrations();
    })
    
    afterAll(async() => {
        const con = getConnection();
        await con.dropDatabase();
        await con.close();
    })

    it('Should be able to create new survey', async() => {
        const response = await request(app).post('/surveys').send({ 
            title: 'title example',
            description: 'description example'
        })

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('Should be able to get all surveys', async() => {
        await request(app).post('/surveys').send({ 
            title: 'title example2',
            description: 'description example2'
        })

        const response = await request(app).get('/surveys');

        expect(response.body.length).toBe(2);
    });
})
