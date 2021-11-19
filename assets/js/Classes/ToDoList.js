import {Element} from "./Abstract/Element";
import {ToDoLine} from "./ToDoLine";

export class ToDoList extends Element {
    constructor(array) {
        super('toDoList');
        array.forEach( (e, id) => this.element.append(new ToDoLine(e, id).getElement()));
    }
}