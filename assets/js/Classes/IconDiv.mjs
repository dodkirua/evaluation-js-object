import {Element} from "./Abstract/Element.mjs";
import {DelIcon} from "./DelIcon.mjs";
import {CheckCircleIcon} from "./CheckCircleIcon.mjs";
import {EditIcon} from "./EditIcon.mjs";

export class IconDiv extends Element {
    /**
     * constructor of element
     */
    constructor() {
        super('iconDiv');
        let del = new DelIcon();
        let circle = new CheckCircleIcon();
        let edit = new EditIcon();
        this.element.append(circle.getElement());
        this.element.append(edit.getElement());
        this.element.append(del.getElement());
    }
}