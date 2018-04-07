class Task {
    constructor(name, time) {
        this.id = this.$loki;
        this.name = name;
        this.time = 0;
        //User ID hinzufügen (verknüpfung zum user)
    }

    toJSON() {
        let task = Object.assign({}, this);
        task.meta = undefined;
        return task;
    }
}

module.exports = Task;