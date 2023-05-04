import Order from "./order";
import OrderItem from './order_item';
import Customer from './customer';

describe("Customer unit test", () => {

    it("should be true", () => {
        expect(true).toBe(true);
    }
    );

    it ("should return error", () => {
        expect( () => {
            let customer = new Customer("1", "");
        }).toThrowError("Name is required");
    });

    it("should not return error", () => {
        expect(() => {

            let orderItem1 = new OrderItem("1", "1", "item1", 10);
            let orderItem2 = new OrderItem("2", "1", "item2", 20);
            let listOrders = [orderItem1, orderItem2];
            let order = new Order("1", "1", listOrders, 1);
        }).toBeTruthy();
      });

});
