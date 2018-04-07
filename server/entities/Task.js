class Task {
    constructor(name, time) {
        this.name = name;
        this.time = 0;
    }

    toJSON() {
        let task = Object.assign({}, this);
        task.meta = undefined;
        return task;
    }
}

module.exports = Task;