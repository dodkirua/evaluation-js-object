import {Element} from "./Abstract/Element.mjs";

export class AddItemInput extends Element {
    /**
     * constructor for add item input
     */
    constructor() {
        super('addItemInput');
        this.input = document.createElement('input');
        this.input.placeholder = 'Name...';
        this.element.append(this.input);
    }
}