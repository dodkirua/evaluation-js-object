import {Element} from "./Abstract/Element";
import {DelIcon} from "./DelIcon";
import {CheckCircleIcon} from "./CheckCircleIcon";
import {EditIcon} from "./EditIcon";

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