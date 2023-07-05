export default class Model {
    static universities=[];
    static loadUniversities(country) {

        return fetch("http://universities.hipolabs.com/search?country="+country, {
            credentials: "same-origin",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 200)
                return response.json();
            else throw new Error("Problème de réponse ", response);
        }).then(data => {
            Model.universities= data;
        })

    }
}
