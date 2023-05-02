import OrderItem from './order-item';

export default class Order {
    
    _id: string;
    _customerId: string;
    _items: OrderItem[];
    _total: number;

    constructor(id: string, customerId: string, _items: OrderItem[], total: number) {
        this._id = id;
        this._customerId = customerId;
        this._items = _items;
        this._total = total;
    }

    total(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
}