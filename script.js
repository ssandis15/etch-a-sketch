const mainContainer = document.querySelector('div');
const squareDiv = document.getElementsByClassName('square');
for (let index = 0; index < 16; index++) {
    for (let index = 0; index <16; index++) {
        let div = document.createElement('div');
        div.style.cssText = 'border-style:solid; border-width:0.5px 0.5px; width:25px;height:25px';
        mainContainer.appendChild(div);
        div.classList.add('square')
        const mouseOverFunction = function () {
            this.style.backgroundColor = 'blue';
        }
        div.onmouseover = mouseOverFunction;

    }
    
}


mainContainer.classList.add('container')


