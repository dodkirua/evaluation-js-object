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
        this.del = new DelIcon();
        this.circle = new CheckCircleIcon();
        this.edit = new EditIcon();
        this.element.append(this.circle.getElement());
        this.element.append(this.edit.getElement());
        this.element.append(this.del.getElement());
    }
}