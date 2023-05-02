import OrderItem from '.order_item';

export default class OrderItem {

    _id: string;
    _name: string;
    _price: number;

    constructor(id: string, customerId: string, name: string, price: number) {
        this._id = id;
        this._customerId = customerId;
        this._name = name;
        this.price = price;
    }

}