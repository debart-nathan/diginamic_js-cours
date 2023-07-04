/**
 * il fait l'intermédiaire entre les deux
 */
class Controller {
    #model
    #view
    constructor(model, view) {
        this.#model = model
        this.#view = view

        // Display initial Tasks
        this.onTaskListChanged(this.model.getTaskstasks())
    }

    onTaskListChanged = (tasks) => {
        this.view.displayTasks(tasks)
    }
}