class Storage {
    #items

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(items) {
        this.#items.push(items);
    }

    removeItem(items) {
        this.#items = this.#items.filter(item => item !== items);
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

