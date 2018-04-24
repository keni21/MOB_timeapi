class Task {
    constructor(name, time, userid) {
        this.id = this.$loki;
        this.name = name;
        this.time = 0;
        //User ID hinzufügen (verknüpfung zum user)
        this.userid = userid;

    }

    toJSON() {
        let task = Object.assign({}, this);
        task.id = this.$loki;
        task.meta = undefined;
        return task;
    }
}

module.exports = Task;