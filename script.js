var player = document.getElementById("player");
var enemy = document.getElementById("enemy");

var highScore = 0;
var score = 0;

if (!localStorage.getItem("highScore")) {
    highScore = localStorage.setItem('highScore', 0);
}

document.addEventListener('DOMContentLoaded', function() {
    highScore = localStorage.getItem('highScore');
    document.querySelector(".highScore").innerHTML = `High Score: ${highScore}`;
});

document.addEventListener("keydown", function(event){
    if (!player.classList.contains("jump") && (event.keyCode == 32 || event.keyCode == 38)) {
        player.classList.add("jump");
        setTimeout(function() {
            player.classList.remove("jump"); 
        }, 750);
    }
});

var isIncreased = false;

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
            if (highScore > localStorage.getItem('highScore')) {
                document.querySelector(".highScore").innerHTML = `High Score: ${highScore}`;
                localStorage.setItem('highScore', highScore); 
            }
        } else if (isIncreased === false) {
            score += 1;
            document.querySelector(".score").innerHTML = `Score: ${score}`;
            if (score > highScore) {
                highScore = score;
            }
            isIncreased = true;
        }
    } else {
        isIncreased = false;
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