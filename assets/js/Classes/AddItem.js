import {Element} from "./Abstract/Element";
import {Button} from "./Button";
import {AddItemInput} from "./AddItemInput";

export class AddItem extends Element {
    /**
     * constructor for add item
     */
    constructor() {
        super('addItem');
        const button = new Button('addItemButton','Add Item');
        const input = new AddItemInput();
        this.element.append(input.getElement());
        this.element.append(button.getElement());
    }
}