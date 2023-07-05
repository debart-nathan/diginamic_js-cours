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
    const newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.addEventListener("click", (event) => { validateFunction(event, !action); })
    task.replaceChild(newButton, event.target); // remplace le bouton qui est event.target par un nouveau bouton (validate)
    task.style.textDecoration = action ? "line-through" : "none";
    if(action){
        task.parentElement.append(task);
    }else{
        task.parentElement.prepend(task);
    }
        
}
