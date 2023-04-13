// This example show Entity
// If Entity din't have any method with decision of business logic, it is Anemic Entity
// what is Anemic Entity? https://martinfowler.com/bliki/AnemicDomainModel.html


class Customer {

    private _id: string;
    private _name: string = "";
    private _address: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name == "") {
            throw new Error("Name is required")
        }
        if (this._id.length != 36) {
            throw new Error("Invalid id")
        }
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    set name(name: string) {
        this._name = name;
    }

    set address(address: string) {
        this._address = address;
    }
}