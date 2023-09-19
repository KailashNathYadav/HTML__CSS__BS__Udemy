//Targeting the source of image.
var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;

function getImgSrc(randomNum){
    return `images/dice${randomNum}.png`;
}

var imgSrc1 = getImgSrc(randomNum1);
var imgSrc2 = getImgSrc(randomNum2);

const targetImg1 = document.querySelector(".img1");
const targetImg2 = document.querySelector(".img2");
targetImg1.setAttribute("src",imgSrc1);
targetImg2.setAttribute("src",imgSrc2);

//Targeting the text Refresh Me
const targetH1 = document.querySelector("h1");
if(randomNum1 > randomNum2)
    targetH1.innerHTML = "Player1 wins";
else if(randomNum2 > randomNum1)
    targetH1.innerHTML = "Player2 wins";
else
    targetH1.innerHTML = "Draw";
    
