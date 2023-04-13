describe("Customer unit test", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("Id is required");
    });

    it("Should throw error when name is empty")

});
