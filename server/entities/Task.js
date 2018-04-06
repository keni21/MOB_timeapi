class Task {
    constructor(name, description, project) {
        this.name = name;
        this.description = description;
        this.project = project;
    }

    toJSON() {
        let task = Object.assign({}, this);
        task.meta = undefined;
        task.id = this.$loki;
        return task;
    }
}

module.exports = Task;