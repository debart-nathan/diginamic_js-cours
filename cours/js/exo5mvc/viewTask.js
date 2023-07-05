import { createMarkup } from "../utils/dom.js";

/**
 * @class
 * Elle gère l'affichage et la récupération des input
 * 
 */
class View {
    /**
     * {element} element racine du dom qui contiendra l'application
     */
    #rootDom
    /**
     * {object} that contain: forms element created, a task wrapper, 
     *          an empty array to put the future task elements
     */
    #domElements
    /**
     * @constructor
     */
    constructor() {
        this.#rootDom = document.getElementById("root");
        this.#domElements = this.renderConstElt();
    }

    /**
     * Affiche les éléments immuable de l’application
     * @returns {object} that contain: forms element created, a task wrapper, 
     *                 an empty array to put the future task elements
     */
    renderConstElt() {
        const form = createMarkup("form", "", this.#rootDom);

        const inputTask = createMarkup("input", "", form, [{ type: "text" }]);
        const addTask = createMarkup("input", "", form, [{ type: "submit" }]);
        const taskZone = createMarkup("section", "", this.#rootDom)
        return {
            form,
            inputTask,
            addTask,
            taskZone,
            tasksElts: []
        }
    }
    /**
     * display the tasks 
     * @param {array} tasks and array of the task object
     */
    renderTasks(tasks) {
        tasks.forEach(task => {
          const validateCssTask = task.done ? "text-decoration-line-through" : "";
          const validateLabelTask = task.done ? "Invalider" : "Valider";
    
          const taskElt = createMarkup("section", "", this.constDomElements.sectionTasks, [{ class: "d-flex gap-2 w-100 flex-wrap" }]);
          const titleTask = createMarkup("h3", task.label, taskElt, [{ class: "w-75 " + validateCssTask }]);
          const btnDelete = createMarkup("button", "Supprimer", taskElt, [{ class: "btn btn-danger" }]);
          const btnValidate = createMarkup("button", validateLabelTask, taskElt, [{ class: "btn btn-warning" }]);
          this.constDomElements.tasksElts.push(taskElt);
        })
      }
      
      /**
       * 
       * @param {Function} handler est une fonction de callback qui est une référence vers le handler du controller
       */
      handleTaskEvents(handler){
        console.log(`Dans handleTaskEvents de la vue`, handler);
        this.constDomElements.tasksElts.forEach(task => {
          task.onclick = event => {
            handler(event.target);
            // Faire un switch case pour choisir ce qui a été cliqué (delete ou validate)
            // Envoyer l'info au model pour le modifier
            // Relancer renderTasks (via la vue) 
          }
        })
      }
}