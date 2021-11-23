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
        let button = document.createElement('button');
        button.innerHTML = value;
        this.element.append(button);
    }
}