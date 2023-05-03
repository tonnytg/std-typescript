import { Customer } from "./customer";
import { Address } from "./address";

let customer = new Customer("36", "Teste");
let Address = new Address(
    "Rua teste",
    "Cidade teste",
    "Estado teste",
    "00000000"
    )

customer.Address = Address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);

const order = new Order("1", customer.id, [item1, item2]);
