const hobbies = require('../hobbies');

describe("test api |", () => {
    describe("requests |", () => {
        describe("getHobbies", () => {
            const list = hobbies.getHobbies();

            it("returns 5 hobbies", () => {
                expect(list.length).toEqual(5);
            });

            it("returns 'jogging' as first hobby", () => {
                expect(list[0]).toBe("jogging");
            });

            it("returns even numbered elements form array", () => {
                let temp = [];
                for (let i = 0; i < list.length; i += 2) {
                    temp.push(list[i]);
                }

                expect(temp).toEqual(['jogging', 'diving', 'reading']);
            });

            it("returns 'reading' as last element", () => {
                expect(list[list.length - 1]).toBe('reading');
            });
        })
    });
});