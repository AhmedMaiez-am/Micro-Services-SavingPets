const Note = require("../Routes/NoteRouter");

describe("Add", () =>{
    it("should retrieve a user", () =>{
        expect(Note.post);
    });
});

describe("Get", () =>{
    it("should retrieve a user", () =>{
        expect(Note.get);
    });
});

describe("Delete", () =>{
    it("should retrieve a user", () =>{
        expect(Note.delete);
    });
});

describe("Update", () =>{
    it("should retrieve a user", () =>{
        expect(Note.put);
    });
});

describe("Find", () =>{
    it("should retrieve a user", () =>{
        expect(Note.all);
    });
});

describe("Param", () =>{
    it("should retrieve a user", () =>{
        expect(Note.param);
    });
});