class Product {
    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    toJSON() {
        let product = Object.assign({}, this);
        product.meta = undefined;
        product.id = this.$loki;
        return product;
    }
}

module.exports = Product;