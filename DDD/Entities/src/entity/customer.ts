// This example show Entity
// If Entity din't have any method with decision of business logic, it is Anemic Entity
// what is Anemic Entity? https://martinfowler.com/bliki/AnemicDomainModel.html

import { Address } from "./address";

export default class Customer {

    private _id: string;
    private _name: string = "";
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id
        this._name = name;
        this.validate();
    }
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): Address {
        return this._address;
    }    

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name == "") {
            throw new Error("Name is required")
        }
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required")
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address;
    }
}