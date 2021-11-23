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
        let i = document.createElement('i');
        i.classList.add(iconClass1);
        i.classList.add(iconClass2);
        this.element.append(i);
    }
}