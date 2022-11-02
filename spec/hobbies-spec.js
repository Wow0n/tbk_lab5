let request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:3000';

describe("test api |", () => {
    describe("requests |", ()=> {
        it("return status code 200", function(done) {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return all records", function(done) {
            request.get(base_url + '/hobbies', (error, response, body) => {
                expect(body).toBe('["jogging", "cooking", "diving", "swimming", "reading"]');
                done();
            });
        });
        it("return 3rd record", function(done) {
            request.get(base_url + '/hobbies/3', (error, response, body) => {
                expect(body).toBe('diving');
                done();
            });
        });
        it("return number of elements in array", function(done) {
            request.get(base_url + '/count', (error, response, body) => {
                expect(body).toBe('5');
                done();
            });
        });
        it("return number of elements in array", function(done) {
            request.get(base_url + '/count', (error, response, body) => {
                expect(body).toBe('["jogging", "diving", "reading"]');
                done();
            });
        });
    });
});