import {Element} from "./Abstract/Element.mjs";

export class Title extends Element {
    /**
     * title constructor
     */
    constructor() {
        super('title');
        this.h1 = document.createElement('h1');
        this.h1.innerHTML = 'to do list';
        this.element.append(this.h1);
    }
}