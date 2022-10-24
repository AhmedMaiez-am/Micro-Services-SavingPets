const Event = require("../Routes/EventRouter");

describe("Add", () =>{
    it("should retrieve a user", () =>{
        expect(Event.post);
    });
});

describe("Get", () =>{
    it("should retrieve a user", () =>{
        expect(Event.get);
    });
});

describe("Delete", () =>{
    it("should retrieve a user", () =>{
        expect(Event.delete);
    });
});

describe("Update", () =>{
    it("should retrieve a user", () =>{
        expect(Event.put);
    });
});

describe("Find", () =>{
    it("should retrieve a user", () =>{
        expect(Event.all);
    });
});

describe("Param", () =>{
    it("should retrieve a user", () =>{
        expect(Event.param);
    });
});