import {Display} from "./js/Classes/Display.mjs";
import {ButtonClic} from "./js/Classes/ButtonClic.mjs";

new Display();
const buttonClicker = new ButtonClic();

const add = document.querySelector('.addItemButton');
const clear = document.querySelector('.clear button');
const button = document.querySelectorAll('.button');
const storage = window.localStorage;
const input = document.querySelector('.addItemInput input');
const valid = document.querySelector('.fa-check-circle');
const edit = document.querySelector('.fa-edit');
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
});

add.addEventListener('click', function(){
        if (input.value !== "" && input.value !== null){
            let nb = storage.getItem('number');
            if (nb !== undefined){
                storage.setItem('number',nb++);
            }
            else {
                storage.setItem('number',1);
            }
            storage.setItem('line' + nb , input.value);
        }
        new Display();
});

valid.addEventListener('click', function (){
    console.log(this.parentElement.parentElement) ;
});