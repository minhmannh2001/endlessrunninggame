var player = document.getElementById("player");
var enemy = document.getElementById("enemy");

document.addEventListener("keydown", function(){
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(function() {
            player.classList.remove("jump"); 
        }, 750);
    }
});

setInterval(function() {
    var enemyCssObj = window.getComputedStyle(enemy);
    var location = parseInt(enemyCssObj.getPropertyValue("left"));
    if (-75 <= location && location <= 25) {
        if (!player.classList.contains("jump")) {
            bite();
            document.querySelector(".background1").classList.add("stopAnimation");
            document.querySelector(".background2").classList.add("stopAnimation");
            document.querySelector(".background3").classList.add("stopAnimation");
            document.querySelector(".background4").classList.add("stopAnimation");
            document.querySelector(".background5").classList.add("stopAnimation");
            document.querySelector(".menu").classList.remove("d-none");
        }
    }
}, 10);


var switchDog = setInterval(function(){
    if (enemy.classList.contains("dog")) {
        enemy.classList.remove("dog");
        enemy.classList.add("dog2");
    } else {
        enemy.classList.remove("dog2");
        enemy.classList.add("dog");
    }
}, 3000);

function bite(){
    if (enemy.classList.contains("dog")) {
        clearInterval(switchDog);
        enemy.classList.remove("dog");
        enemy.classList.add("dogBite");
    } else if (enemy.classList.contains("dog2")) {
        clearInterval(switchDog);
        enemy.classList.remove("dog2");
        enemy.classList.add("dog2Bite");
    }
    player.classList.remove("player");
    player.classList.add("playerDie");
}