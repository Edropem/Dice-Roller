var randomNumber1;
randomNumber1 = Math.floor(Math.random() * (1 + 6 - 1)) + 1;


var imgName;
imgName = ("images/dice"+randomNumber1+".png");

document.getElementsByTagName("img")[0].setAttribute("src", imgName);

var randomNumber2;
randomNumber2 = Math.floor(Math.random() * (1 + 6 - 1)) + 1;


var imgName;
imgName2 = ("images/dice"+randomNumber2+".png");

document.getElementsByTagName("img")[1].setAttribute("src", imgName2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else {
    document.querySelector("h1").innerHTML = "Draw";
}


console.log;