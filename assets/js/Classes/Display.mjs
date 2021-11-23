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
        let title = new Title();
        let add = new AddItem();
        const storage = window.localStorage;
        const nb = storage.getItem('number')
        let array = [];
        if (nb !== null)        {
            for (let i = 1 ; i <= nb ; i++) {
                let item = storage.getItem('line'+i);
                if (item !== null){
                 array[i] = item;
                }
            }
        }
        let list = new ToDoList(array);
        let button = new Button('clear', 'Clear Items')
        body.append(title.getElement());
        body.append(add.getElement());
        body.append(list.getElement());
        body.append(button.getElement());
    }
}