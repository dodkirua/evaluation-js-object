import {Element} from "./Abstract/Element.mjs";

export class Button extends Element {
    /**
     * Button constructor
     * @param classname
     * @param value
     */
    constructor(classname, value) {
        super(classname);
        this.element.classList.add('button')
        this.button = document.createElement('button');
        this.button.innerHTML = value;
        this.element.append(this.button);
    }
}