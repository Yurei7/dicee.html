
const picUrls = [
    "https://cdn-icons-png.flaticon.com/512/8336/8336943.png",
    "https://cdn-icons-png.flaticon.com/512/8336/8336956.png",
    "https://cdn-icons-png.flaticon.com/512/8336/8336955.png",
    "https://cdn-icons-png.flaticon.com/512/8336/8336933.png",
    "https://cdn-icons-png.flaticon.com/512/8336/8336931.png",
    "https://cdn-icons-png.flaticon.com/512/8336/8336948.png"
];

const diceMax = 6;

function diceGame() {
    document.querySelector(".btn").style.visibility = ("visible")

    let randomDice1 = Math.floor((Math.random() * diceMax) + 1)
    let randomDice2 = Math.floor((Math.random() * diceMax) + 1)

    document.querySelector(".player1").setAttribute("src", picUrls[randomDice1 - 1]);
    document.querySelector(".player2").setAttribute("src", picUrls[randomDice2 - 1]);

    if (randomDice1 > randomDice2) {
        document.querySelector(".title").innerHTML = ("&#129351; Player 1 Wins! &#129351;")

    }
    else if (randomDice2 > randomDice1) {
        document.querySelector(".title").innerHTML = ("&#129351; Player 2 Wins! &#129351;")

    }
    else if (randomDice1 === randomDice2) {
        document.querySelector(".title").innerHTML = (" &#129309; DRAW! &#129309;")

    }


}

function connectWallet() {
    window.solana.connect
    window.solana.request({method:"connect"})
    
    }

