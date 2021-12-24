class StringBuilder {
    #values;
    constructor() {
        this.#values = [];
    }
        
    append(...value){
        this.#values.push(value);
        return this;
    }
    
    build() {
        return this.#values.join("");
    }
    
}

module.exports = StringBuilder;