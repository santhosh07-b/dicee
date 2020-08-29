var randomNumber = Math.floor(Math.random() * 6)+1;
var randomDice ="dice" + randomNumber + ".png";
var iamgeSourse = "images/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", iamgeSourse);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var imageSourse2 = "images/dice"+ randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSourse2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩player one win!";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "player dwo win!🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "draw!";
    }