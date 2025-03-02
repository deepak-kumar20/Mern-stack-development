var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerText = "⛳️ Player 1 Wins.";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerText = "⛳️ Player 2 Wins.";
    
} else {
        document.querySelector("h1").innerText = "😅 Match Draw";

}
var randomImg1 = "dice" + randomNum1 + ".png";
var randomImg2 = "dice" + randomNum2 + ".png";
var randSrc1 = `./images/${randomImg1}`;
var randSrc2 = `./images/${randomImg2}`;
document.querySelector(".img1").setAttribute("src", randSrc1);
document.querySelector(".img2").setAttribute("src", randSrc2);
