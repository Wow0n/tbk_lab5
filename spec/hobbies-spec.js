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
            request.get(base_url + '/all', (error, response, body) => {
                expect(body).toBe('[{"id":1,"name":"Jan","mark":3},{"id":2,"name":"Anna","mark":4},{"id":3,"name":"Karol","mark":3},{"id":4,"name":"Maciej","mark":4},{"id":5,"name":"Monika","mark":3}]');
                done();
            });
        });
        it("return 3rd record", function(done) {
            request.get(base_url + '/nth/3', (error, response, body) => {
                expect(body).toBe('[{"id":3,"name":"Karol","mark":3}]');
                done();
            });
        });
        it("return avg marks from marks table", function(done) {
            request.get(base_url + '/avg', (error, response, body) => {
                expect(body).toBe('[{"avg":"3.4000000000000000"}]');
                done();
            });
        });
    });
});