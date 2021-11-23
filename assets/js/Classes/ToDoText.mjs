import {Element} from "./Abstract/Element.mjs";

export class ToDoText extends Element{
    /**
     * constructor for ToDo text
     * @param text
     */
    constructor(text) {
        super('toDoText');
        this.p = document.createElement('p');
        this.setP(text);
        this.element.append(this.p);
    }

    /**
     * insert text in element p
     * @param value
     */
    setP(value){
        this.p.innerHTML = value;
    }
}