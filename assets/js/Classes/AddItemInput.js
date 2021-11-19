import {Element} from "./Abstract/Element";

export class AddItemInput extends Element {
    /**
     * constructor for add item input
     */
    constructor() {
        super('addItemInput');
        let input = document.createElement('input');
        input.placeholder = 'Name...';
        this.element.append(input);
    }
}