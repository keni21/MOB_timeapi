class Task {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }

    toJSON() {
        let task = Object.assign({}, this);
        task.meta = undefined;
        task.id = this.$loki;
        return task;
    }
}

module.exports = Task;