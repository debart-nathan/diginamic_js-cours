import { createMarkup } from "./utils/dom.js";
import Model from "./university/Model.js";
import FormCountry from "./university/FormCountry.js";
import University from "./university/University.js";
import FormFilter from "./university/FormFilter.js";

//var def
//

const container = createMarkup("main", "", document.body, [{ id: "main-container", class: "container" }])

FormCountry.renderForm();

FormFilter.renderForm();


const wrapperUnivs = createMarkup("section", "", container, [{ id: "univ-area", class: "row row-cols-4 g-2" }])



// handler connect
try {
    FormCountry.handleSubmit(Model.loadUniversities, handleSubmit);
} catch (error) {
    console.error(error);
}

FormFilter.handleSubmit(handleSubmitFilter);






//functions
//

function handleSubmit() {
    const univs = Model.universities

    while (wrapperUnivs.hasChildNodes()) {
        wrapperUnivs.removeChild(wrapperUnivs.lastChild);
    }

    Model.universities.forEach((university, index) => {
        new University(index, university.name, university.web_pages, wrapperUnivs);
    })
    FormFilter.formFilterElt.hidden = false;

}


function handleSubmitFilter(text) {
    console.log(`dans handleSubmitFilter du controller : `, text);
    //filtre seulement si la taille est 3 ou +
    if (text.length > 2) {

        // Filtre sur la donnée (propriété universities de la classe Model)
        const filtered = Model.universities.filter((elem) => {
            return elem.name.toLowerCase().includes(text.toLowerCase())
        })
        console.log(`filtered`, Model.universities);
        // Suppression de tous les enfants de wrapperUnivs
        while (wrapperUnivs.hasChildNodes()) {
            wrapperUnivs.removeChild(wrapperUnivs.lastChild);
        }
        // Création des instances de University à partir des données filtrées
        filtered.forEach((university, index) => {
            new University(index, university.name, university.web_pages, wrapperUnivs);
        })

    }

}