import {Element} from "./Abstract/Element.mjs";
import {TodoMod} from "./TodoMod.mjs";

export class ToDoText extends Element{
    /**
     * constructor for ToDo text
     * @param text
     */
    constructor(text) {
        super('toDoText');
        this.p = document.createElement('p');
        this.setP(text);
        let todoMod = new TodoMod().getElement();
        todoMod.style.display = 'none';
        this.element.append(this.p);
        this.element.append(todoMod);
    }

    /**
     * insert text in element p
     * @param value
     */
    setP(value){
        this.p.innerHTML = value;
    }
}