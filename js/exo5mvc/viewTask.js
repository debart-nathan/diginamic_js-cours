import { createMarkup } from "../utils/dom.js";

/**
 * Elle gère l'affichage et la récupération des input
 * 
 */
class View {
    #rootDom
    #domElements
    constructor() {
        this.#rootDom = document.getElementById("root");
        this.#domElements = this.renderForm();
    }
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
}