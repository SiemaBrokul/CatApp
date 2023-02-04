// Cat Images array
const catImages = ["/cat/1.png", "/cat/2.png", "/cat/3.png", "/cat/4.png", "/cat5.png", "/cat/6.png", "/cat/7.png", "/cat/8.png"];
const cat = document.getElementById("cat");
let currentImageIndex = 7;

cat.src = catImages[currentImageIndex];



// Add meow sound effect 
const meowButton = document.getElementById("meow-button");
const meowSound = document.getElementById("meow-sound"); 

meowButton.addEventListener("click", function() {
    meowSound.currentTime = 0;
    meowSound.play();
});

document.getElementById("meow-button").addEventListener("click", function () {
    let currentImageIndex = 1;
    cat.src = catImages[currentImageIndex];

    setTimeout(function () {
        currentImageIndex = 7
        cat.src = catImages[currentImageIndex];
    }, 1000);
});

// Add feed effect
document.getElementById("feed-button").addEventListener("click", function (){
    
})

// Add tail effect
document.getElementById("tail-button").addEventListener("click", function(){

});

// Add jump effect
document.getElementById("jump-button").addEventListener("click", function (){
    const catImage = document.getElementById("cat");

    const jumpAnimation = anime({
        targets: catImage,
        translateY: [-100, 0],
        easing: "easeOutQuad",
        duration: 500,
        loop: false
    });
    jumpAnimation.play();
    
});



