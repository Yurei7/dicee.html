
function diceGame() {
    document.querySelector(".btn").style.visibility=("visible")


    let randomDice1= Math.floor((Math.random()*6)+1)
    if (randomDice1===1){
        document.querySelector(".player1").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336943.png")
    
    }
    
    else if (randomDice1===2) {
        document.querySelector(".player1").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336956.png")
    
    }
    
    else if (randomDice1===3) {
        document.querySelector(".player1").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336955.png")
    
    }
    else if (randomDice1===4) {
        document.querySelector(".player1").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336933.png")
        
    
    }
    
    else if (randomDice1===5) {
        document.querySelector(".player1").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336931.png")
    
    }
    
    else if (randomDice1===6) {
        document.querySelector(".player1").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336948.png")
    
    }
    
    let randomDice2= Math.floor((Math.random()*6)+1)
    
    
    if (randomDice2===1){
        document.querySelector(".player2").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336943.png")
    
    }
    
    else if (randomDice2===2) {
        document.querySelector(".player2").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336956.png")
    
    }
    
    else if (randomDice2===3) {
        document.querySelector(".player2").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336955.png")
    
    }
    else if (randomDice2===4) {
        document.querySelector(".player2").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336933.png")
    
    }
    
    else if (randomDice2===5) {
        document.querySelector(".player2").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336931.png")
    
    }
    
    else if (randomDice2===6) {
        document.querySelector(".player2").setAttribute("src", "https://cdn-icons-png.flaticon.com/512/8336/8336948.png")
    
    }
    
    if (randomDice1>randomDice2) {
        document.querySelector(".title").innerHTML=("&#129351; Player 1 Wins! &#129351;")
    
    }
    else if (randomDice2>randomDice1) {
        document.querySelector(".title").innerHTML=("&#129351; Player 2 Wins! &#129351;")
    
    }
    else if (randomDice1===randomDice2){
     document.querySelector(".title").innerHTML=(" &#129309; DRAW! &#129309;")
    
    }
    

}


