import { createMarkup } from "./utils/dom.js";

const form = createMarkup("form", "", document.body);

const inputTask = createMarkup("input", "", form, [{ type: "text" }]);
const addTask = createMarkup("input", "", form, [{ type: "submit" }]);

const taskZone = createMarkup("section", "", document.body)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = createMarkup("section", "", taskZone);
    createMarkup("span", inputTask.value, task);
    const validate = createMarkup("button", "validate", task);
    validate.addEventListener("click", (event) => {
        validateFunction(event, true);
    });

    const btnDelete = createMarkup("button", "delete", task)
    btnDelete.addEventListener("click", () => {
        task.remove();
    })



});

function validateFunction(event, action) {
    const text = !action ? "validate" : "invalidate";
    const task = event.target.parentElement
    const invalidate = document.createElement("button");
    invalidate.textContent = text;
    invalidate.addEventListener("click", (event) => { validateFunction(event, !action); })
    task.replaceChild(invalidate, event.target);
    task.style.textDecoration = action ? "line-through" : "none";
    if(!action){
        const taskZone=task.parentElement;
        task.detach().appendTo(taskZone);
    }

}
