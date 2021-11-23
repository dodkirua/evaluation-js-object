
export class ButtonClic {
    click(button){
        button.children[0].style.color = 'white';
        button.children[0].style.backgroundColor = 'grey';

    }
    unclick(button){
        button.children[0].style = "";
    }
}