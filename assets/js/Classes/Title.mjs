import {Element} from "./Abstract/Element.mjs";

export class Title extends Element {
    /**
     * title constructor
     */
    constructor() {
        super('title');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'to do list';
        this.element.append(h1);
    }
}