class User {

    constructor(username) {
        this.id = this.$loki;
        this.username = username;
    }

    toJSON() {
        let user = Object.assign({}, this);
        user.meta = undefined;
        user.id = this.$loki;
        return user;
    }
}

module.exports = User;