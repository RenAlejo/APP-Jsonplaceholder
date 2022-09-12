import request from 'supertest'


describe('Test on Records Routes', () => {

    const api_url = 'http://localhost:8080/api';

    test('Get records should have a content-type: application/json in header', async () => {
        const response = await request(api_url).get('/records').send();
        expect(response.header["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    });

    test('Get records should return status code 200', async () => {
        const response = await request(api_url).get('/records').send();
        expect(response.statusCode).toBe(200)
    });

    test('Post records should return status code 200', async () => {
        const response = await request(api_url).post('/records').send({
            "date":"2022-03-12",
            "method":"GET",
            "response": {
                "test":"test1"
            } 
        });
        expect(response.statusCode).toBe(200)
    });

    test('Post records should return status code 400 if required body fields are missing', async () => {
        const response = await request(api_url).post('/records').send({
            "date":"11/09/2022",
        });
        expect(response.statusCode).toBe(400)
    });


    test('Get records Base64 should have a content-type: application/json in header', async () => {
        const response = await request(api_url).get('/records/b64/1').send();
        expect(response.header["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    });

    test("Get records Base64 should return status code 401 if id doesn't exist", async () => {
        const response = await request(api_url).get('/records/b64/1').send();
        expect(response.statusCode).toBe(400)
    });


    test('Delete records should have a content-type: application/json in header', async () => {
        const response = await request(api_url).delete('/records/1').send();
        expect(response.header["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    });

    test("Delete records should return status code 401 if id doesn't exist", async () => {
        const response = await request(api_url).delete('/records/1').send();
        expect(response.statusCode).toBe(400)
    });

    test('Put records should have a content-type: application/json in header', async () => {
        const response = await request(api_url).put('/records/1').send();
        expect(response.header["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    });

    test("Put records should return status code 401 if id doesn't exist", async () => {
        const response = await request(api_url).put('/records/1').send();
        expect(response.statusCode).toBe(400)
    });
    
})