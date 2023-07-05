/**
 * il fait l'intermédiaire entre les deux
 */
class Controller {
    #model
    #view
    /**
     * @constructor
     * @param {Model} model 
     * @param {View} view 
     */
    constructor(model, view) {
        this.#model = model
        this.#view = view

        // Display initial Tasks
        this.onTaskListChanged(this.model.getTasks())
    }
    /**
     * call the view to update the display
     * @param {Array} tasks an array of the tasks objects
     */
    onTaskListChanged = (tasks) => {
        this.view.displayTasks(tasks)
    }
}