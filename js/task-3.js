class StringBuilder {
    #value

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(initialValue) {
        return this.#value = initialValue + this.#value;
    }

    padEnd(initialValue) {
        return this.#value = this.#value + initialValue;
    }

    padBoth(initialValue) {
        return this.#value = initialValue + this.#value + initialValue;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="