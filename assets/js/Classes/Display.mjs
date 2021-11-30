import {Title} from "./Title.mjs";
import {Button} from "./Button.mjs";
import {AddItem} from "./AddItem.mjs";
import {ToDoList} from "./ToDoList.mjs";

export class Display {
    /**
     * display constructor
      */
    constructor() {
        let body = document.body;
        body.innerHTML = '';
        this.title = new Title();
        this.add = new AddItem();
        const storage = window.localStorage;
        const nb = storage.getItem('number')
        let array = [];
        if (nb !== null)        {
            for (let i = 0 ; i <= nb-1 ; i++) {
                let item = storage.getItem('line'+(i+1));
                if (item !== null){
                 array[i] = item;
                }
            }
        }
        this.list = new ToDoList(array);
        this.button = new Button('clear', 'Clear Items')
        body.append(this.title.getElement());
        body.append(this.add.getElement());
        body.append(this.list.getElement());
        body.append(this.button.getElement());


    }
}