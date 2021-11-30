import {ToDoText} from "./ToDoText.mjs";
import {IconDiv} from "./IconDiv.mjs";
import {Element} from "./Abstract/Element.mjs";


export class ToDoLine extends Element{
    /**
     * construct for todo line
     * @param text
     * @param id
     */
    constructor(text,id) {
        super('toDoLine');
        let textDiv = new ToDoText(text);
        let icon = new IconDiv();
        this.element.dataset.id = id;
        this.element.append(textDiv.getElement());
        this.element.append(icon.getElement());

    }
}