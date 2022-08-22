const imgSourceArray = ['./img/Cengino.jpg', './img/Mece.jpg', './img/Finki.jpg'];


const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight")

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');


let index = 0;

function arrowLeftClicked() {

    

    index--;

    if (index < 0) index = imgSourceArray.length - 1


    //--------------------------------

    if(index == 0){
        document.body.style.backgroundImage = "url('./img/Cengino.jpg')";
        dot1.style.backgroundColor = 'white'
        dot2.style.backgroundColor = 'transparent'
        dot3.style.backgroundColor = 'transparent'
    }
    if(index == 1){
        document.body.style.backgroundImage = "url('./img/Mece.jpg')";
        dot1.style.backgroundColor = 'transparent'
        dot2.style.backgroundColor = 'white'
        dot3.style.backgroundColor = 'transparent'
    }
    if (index == 2) {
        document.body.style.backgroundImage = "url('./img/Finki.jpg')";
        dot1.style.backgroundColor = 'transparent'
        dot2.style.backgroundColor = 'transparent'
        dot3.style.backgroundColor = 'white'
    }
  

    //--------------------------------


}

arrowLeft.addEventListener('click', arrowLeftClicked);

function arrowRightClicked() {



    index++;

    if (index >= imgSourceArray.length) index = 0

    //--------------------------------

    if (index == 0) {
        document.body.style.backgroundImage = "url('./img/Cengino.jpg')";
        dot1.style.backgroundColor = 'white'
        dot2.style.backgroundColor = 'transparent'
        dot3.style.backgroundColor = 'transparent'
    }
    if (index == 1) {
        document.body.style.backgroundImage = "url('./img/Mece.jpg')";
        dot1.style.backgroundColor = 'transparent'
        dot2.style.backgroundColor = 'white'
        dot3.style.backgroundColor = 'transparent'
    }
    if (index == 2) {
        document.body.style.backgroundImage = "url('./img/Finki.jpg')";
        dot1.style.backgroundColor = 'transparent'
        dot2.style.backgroundColor = 'transparent'
        dot3.style.backgroundColor = 'white'
    }


    //--------------------------------


}

arrowRight.addEventListener('click', arrowRightClicked);