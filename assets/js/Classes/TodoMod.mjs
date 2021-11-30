import {Element} from "./Abstract/Element.mjs";
import {Button} from "./Button.mjs";


export class TodoMod extends Element{
    /**
     * constructor for add todo mod in
     */
    constructor() {
        super('todoMod');
        this.input = document.createElement('input');
        this.input.classList.add('modInput')
        this.button = new Button('modSubmit', 'OK');
        this.element.append(this.input);
        this.element.append(this.button.getElement());

    }

    buttonListener(){
        this.button.addEventListener('click', function (){
            let value =  this.parentElement.parentElement.children[0].innerHTML;
        });
    }



}