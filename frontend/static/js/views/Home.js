import AbstracView from "./AbstractView.js";

export default class extends AbstracView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `
           
        `;
    }
}