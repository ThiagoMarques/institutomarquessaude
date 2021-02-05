import AbstracView from "./AbstractView.js";

export default class extends AbstracView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
            <h1>Página 1</h1>
            <p> POSTS </p>
        `;
    }
}