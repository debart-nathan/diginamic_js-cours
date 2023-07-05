import { createMarkup } from "../utils/dom.js";

export default class FormCountry {

    static countries = [{ France: "France" }, { Italy: "Italie" }, { Spain: "Espagne" }, { Germany: "Allemagne" }]

    static formElt = null
    static renderForm() {
        const mainCont= document.getElementById("main-container")
        this.formElt = createMarkup("form", "", mainCont, [{ class:"d-flex justify-content-center p-2 m-2"}]);
        const select = createMarkup("select", "", this.formElt, [{ id: "select-country" }])

        FormCountry.countries.forEach((country) => {
            for (let key in country) {
                createMarkup("option", country[key], select, [{ value: key }])
            };
        })


        createMarkup("input", "", this.formElt, [{ type: "submit" },{class:"btn-primary"}])
    }
    static handleSubmit(handler,handlerFollower) {
        FormCountry.formElt.addEventListener("submit", async (event) => {
            event.preventDefault();
            try{
                await handler(document.getElementById("select-country").value)
            }catch(error){
                throw error;
            }
            
            handlerFollower();

        })
    }
}