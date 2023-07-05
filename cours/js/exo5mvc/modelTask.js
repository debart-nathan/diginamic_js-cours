/**
 *  @class
 *  il gère les donné
 *  le payload sont les donné minimum nécessaire a l'interface + id
 *  ici c'est le nom de la tach son statut et sont id
 */
export default class Model {
    #tasks
    constructor() {
        this.#tasks = [{id: 1, label: "faire le ménage", isComplete: false}]
    }
    getTasks() {
        return this.#tasks;
    }
    /**
     * gestion de l'ajout d'une tache
     * @param {string} taskText 
     */
    addTask(taskText) {
        const task = {
            id: this.#tasks.length > 0 ? this.#tasks[this.#tasks.length - 1].id + 1 : 1,
            text: taskText,
            isComplete: false,
        };
        this.#tasks.push(task);

    }
    deleteTask(id) {
        this.#tasks = this.#tasks.filter((task) => task.id !== id);
    }
    toggleTask(id) {
        this.#tasks = this.#tasks.map((task) => {
            return task.id === id ? { id: task.id, text: task.text, isComplete: !task.complete } : task;
        });
    }
}