import {TodoText} from "./ToDoText";
import {IconDiv} from "./IconDiv";
import {Element} from "./Abstract/Element";

export class ToDoLine extends Element{
    /**
     * construct for todo line
     * @param text
     * @param id
     */
    constructor(text,id) {
        super('toDoLine');
        let textDiv = new TodoText(text);
        let icon = new IconDiv();
        this.element.id = 'line'.concat(id);
        this.element.append(textDiv.getElement());
        this.element.append(icon.getElement());
    }
}