import { createMarkup } from "../utils/dom.js";

export default class University {
  constructor(id,name, urls, wrapper) {
    this.id= id
    this.name = name;
    this.urls = urls;
    this.wrapper = wrapper;

    this.render();
  }
  render() {
    console.log(`dans le render de univesity`);
    const univArticleWrapper = createMarkup(
        "div",
        "",
        this.wrapper,
        [{ id: `univ-article-${this.id}` }]
    );

    const univArticle = createMarkup(
      "article",
      "",
      univArticleWrapper,
      [{ id: `univ-article-${this.id}`, class: "border border-3 rounded-3 border-primary h-100 p-2" }]
  );

    createMarkup(
        "h2",
        this.name,
        univArticle,
        [{ id: `univ-name-${this.id}`,class:"fs-5" }]
    );

    const urlUl=createMarkup(
        "ul",
        "",
        univArticle,
        [{ id: `univ-linkList-${this.id}`, class:"list-unstyled" }]
    );
    this.urls.forEach((univLien) => {
        const urlLi =createMarkup("li","",urlUl)
        createMarkup("a",univLien,urlLi,[{href:univLien, class:"mw-100 text-wrap"}])

    });
  }
}