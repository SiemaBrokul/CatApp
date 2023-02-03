const catImage = document.getElementById("cat");
catImage.src = "/styles/1.1.png";

setTimeout(function () {
    catImage.src = "/styles/2.2.png";
}, 100);









// Add meow sound effect 
const meowButton = document.getElementById("meow-button");
const meowSound = document.getElementById("meow-sound"); 

meowButton.addEventListener("click", function() {
    meowSound.currentTime = 0;
    meowSound.play();
});