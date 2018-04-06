class User {

    constructor(username, email, password) {
        this.id = this.$loki;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    toJSON() {
        let user = Object.assign({}, this);
        user.meta = undefined;
        user.id = this.$loki;
        return user;
    }
}

module.exports = User;