/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Array[Object]} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
function createMarkup(markupname, text, parent, attributes = []) {
    const markup = document.createElement(markupname);
    markup.textContent = text;
    parent.appendChild(markup);
    for (const attribute of attributes) {
        for (let key in attribute) {
            markup.setAttribute(key, attribute[key]);
        }
    }
    return markup;
}

const header =createMarkup("header","",document.body);
const nav = createMarkup("nav","",header)
for(let i=1;i<5;i++){
    createMarkup("button",`item ${i}`,nav);
}
document.querySelector("header>nav>button").style.color="red";
