import { createMarkup } from "../utils/dom.js";
export default class FormFilter {
  static formFilterElt = null;
  static renderForm() {
    FormFilter.formFilterElt = createMarkup("form", "", document.getElementById("main-container"), [{class:"m-2 p-2"}]);
    const label = createMarkup("label", "Filtre : ", FormFilter.formFilterElt);
    const input = createMarkup("input", "", FormFilter.formFilterElt, [{ id: "filter-univs" }]);
    const buttonSubmit = createMarkup("input", "", FormFilter.formFilterElt, [{ type: "submit" }, { value: "Filtrer" }]);
    FormFilter.formFilterElt.hidden = true;
  }
  static handleSubmit(handler) {
    FormFilter.formFilterElt.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(`Dans handleSubmit de FormFilter`);
      handler(document.getElementById("filter-univs").value);
    })
  }
}