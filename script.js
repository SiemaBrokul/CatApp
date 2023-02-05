// Change cursor 
document.body.style.cursor = "url(/styles/cursor.png), auto";

// Cat Images array
const catImages = ["cat/1.png", "cat/2.png", "cat/3.png", "cat/4.png", "cat5.png", "cat/6.png", "cat/7.png", "cat/8.png"];
const cat = document.getElementById("cat");
let currentImageIndex = 7;

cat.src = catImages[currentImageIndex];


// Add sleep function 

let timer;
document.addEventListener("mousemove", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        const bed = document.getElementById("bed");
        bed.style.display = "block";
        anime({
            targets: bed,
            opacity: [0, 1],
            duration: 500,
            easing: "linear"
        });

        anime({
            targets: cat,
            opacity: [1, 0],
            duration: 1000,
            easing: "linear",
            complete: function () {
                cat.style.display = "none";
            }
        });
    }, 5000);
    
});














// Add meow sound effect and change frame
const meowButton = document.getElementById("meow-button");
const meowSound = document.getElementById("meow-sound"); 

meowButton.addEventListener("click", function() {
    meowSound.currentTime = 0;
    meowSound.play();
});

document.getElementById("meow-button").addEventListener("click", function () {
let currentImageIndex = 0;
cat.src = catImages[currentImageIndex];

    setTimeout(function () {
        currentImageIndex = 7
        cat.src = catImages[currentImageIndex];
    }, 1000);
});



// Add feed effect
const feedButton = document.getElementById("feed-button");
const feedSound = document.getElementById("feed-sound"); 

feedButton.addEventListener("click", function() {
    feedSound.currentTime = 0;
    feedSound.play();
});

document.getElementById("feed-button").addEventListener("click", function (){
    let currentImageIndex = 3;
    cat.src = catImages[currentImageIndex];
    setTimeout(function () {
        currentImageIndex = 7;
        cat.src = catImages[currentImageIndex];
    }, 1000);
    
})
    
    const snackContainer = document.getElementById("snack-container");
    const showSnacksButton = document.getElementById("feed-button");
    const snacks = [
        { name: "food1", src: "cat/food1.png" },
        { name: "food2", src: "cat/food2.png" },
        { name: "food3", src: "cat/food3.png" },
    ];
    
    // Add snacks 
    showSnacksButton.addEventListener("click", function() {
        snacks.forEach((snack, index) => {
            const snackElement = document.createElement("img");
            snackElement.src = snack.src;
            snackElement.alt = snack.name;
            snackElement.style.opacity = 0;
            snackElement.style.transition = `opacity 1s ease-out ${index * 1}s`;
            snackContainer.appendChild(snackElement);
        });
        
        anime({
            targets: snackContainer.children,
            translateY: [0, -1000],
            opacity: [1, 0],
            delay: anime.stagger(100),
            easing: "easeOutExpo",
            duration: 7000
        });

        setTimeout(() => {
            while (snackContainer.firstChild) {
              snackContainer.removeChild(snackContainer.firstChild);
            }
          }, 5000);
    });
    












// Add tail effect
document.getElementById("tail-button").addEventListener("click", function(){
    
    const images = ["cat/8.png", "cat/8.1.png"];
    let currentImageIndex = 0;
    let interval = setInterval(function() {
      document.getElementById("cat").src = images[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 600);

    setTimeout(function () {
        clearInterval(interval);
    }, 5000);
    

});

















// Add jump effect
document.getElementById("jump-button").addEventListener("click", function (){
    const catImage = document.getElementById("cat");

    const jumpAnimation = anime({
        targets: catImage,
        translateY: [-300, 0],
        easing: "easeOutQuad",
        duration: 500,
        loop: false
    });
    jumpAnimation.play();
    
});





