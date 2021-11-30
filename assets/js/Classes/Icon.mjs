import {Element} from "./Abstract/Element.mjs";

export class Icon extends Element{
    /**
     * constructor for icon
     * @param className
     * @param iconClass1
     * @param iconClass2
     */
    constructor(className, iconClass1, iconClass2) {
        super(className);
        this.i = document.createElement('i');
        this.i.classList.add(iconClass1);
        this.i.classList.add(iconClass2);
        this.element.append(this.i);
    }
}