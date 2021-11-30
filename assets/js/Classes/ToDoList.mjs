import {Element} from "./Abstract/Element.mjs";
import {ToDoLine} from "./ToDoLine.mjs";


export class ToDoList extends Element {
    constructor(array) {
        super('toDoList');
        array.forEach( (e, id) => this.element.append(new ToDoLine(e, id).getElement()));
    }
}