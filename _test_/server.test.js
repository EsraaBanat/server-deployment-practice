'use strict'
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('API Server', () => {
    test('Home Route Test', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World');
    });

        test('getting data from /data route', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');

        });
    
        it('handle not found error', async () => {
        const response = await request.get('/abc');
        // expect(response.status).toEqual(404);
        expect(response.status).toBe(404);

    });
    it('handle server internal errors', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    })
    
})