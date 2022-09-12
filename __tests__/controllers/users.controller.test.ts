import request from 'supertest'

describe('Test on Users Routes', () => {

    const api_url = 'http://localhost:8080/api';

    test("Get single user should return status 404 if id doesn't exist", async () => {
        const response = await request(api_url).get('/users/200').send();
        expect(response.statusCode).toBe(404)
    });

    test("Get photo should return status 404 if id doesn't exist", async () => {
        const response = await request(api_url).get('/users/photo/2002').send();
        expect(response.statusCode).toBe(404)
    });

    test("Get posts should return status 404 if id doesn't exist", async () => {
        const response = await request(api_url).get('/users/posts/2002').send();
        expect(response.statusCode).toBe(404)
    });

})