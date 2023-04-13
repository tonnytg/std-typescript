import OrderItem from './order-item';
export default class Order {
    
    _id: string;
    _customerId: string;
    _itens: OrderItem[];
    _total: number;

    constructor(id: string, customerId: string, itens: OrderItem[], total: number) {
        this._id = id;
        this._customerId = customerId;
        this._itens = itens;
        this._total = total;
    }

    total(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
}