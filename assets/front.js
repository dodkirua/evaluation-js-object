import {Display} from "./js/Classes/Display.mjs";
import {ButtonClic} from "./js/Classes/ButtonClic.mjs";
import favicon from "./images/favicon.ico";
import css from "./css/base.css";

let display = new Display();
const buttonClicker = new ButtonClic();

const add = document.querySelector('.addItemButton');
const clear = document.querySelector('.clear button');
const button = document.querySelectorAll('.button');
const storage = window.localStorage;
const input = document.querySelector('.addItemInput input');
const valid = document.querySelector('.fa-check-circle');
const edit = document.querySelectorAll('.fa-edit');
const del = document.querySelector('.fa-times-circle');

for (let i = 0 ; i < button.length ; i++) {
    button[i].addEventListener('mousedown', function (){
        buttonClicker.click(this);
    } );
    button[i].addEventListener('mouseup', function (){
        buttonClicker.unclick(this);
    } );
}

clear.addEventListener('click', function (){
    let nb = storage.getItem('number');
    if (nb !== undefined){
        for (let i =1 ; i <= nb; i++){
            storage.removeItem('line' + nb);
        }
        storage.removeItem('number');
    }
    display = new Display();
});

add.addEventListener('click', function(){
        if (input.value !== "" && input.value !== null){
            let nb = storage.getItem('number');
            if (nb !== undefined){
                nb++;
                storage.setItem('number',nb.toString());
            }
            else {
                storage.setItem('number',"1");
            }
            storage.setItem('line' + nb , input.value);
        }
    display = new Display();
});

if (valid){
    valid.addEventListener('click', function (){
        let style = this.parentElement.parentElement.parentElement.children[0].children[0].style;
        console.log(style);
        if (style.textDecoration === "line-through"){
            style.textDecoration = "";
        }
        else {
            style.textDecoration = "line-through";
        }
    });
}

if (del){
    del.addEventListener('click', function () {
        let id = parseInt(this.parentElement.parentElement.parentElement.dataset.id);
        let nb = parseInt(storage.getItem('number'));
        if ( id === nb){
            storage.removeItem('line' + id);
            storage.setItem('number', (nb--).toString())
        }
        else {
            storage.removeItem('line' + id);
        }
    });
}

if (edit){
    for (let i = 0 ; i < edit.length ; i++){
        edit[i].addEventListener('click', function (){
            let id = parseInt(this.parentElement.parentElement.parentElement.dataset.id);
            let p =  this.parentElement.parentElement.parentElement.children[0].children[0];
            let todoMod = this.parentElement.parentElement.parentElement.children[0].children[1];
            p.style.display = 'none';
            console.log(display.list);
            todoMod.style.display = 'flex';

        });
    }

}