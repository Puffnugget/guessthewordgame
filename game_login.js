function addUsers(){
    var player1Login = document.getElementById("player1input").value;
    var player2Login = document.getElementById("player2input").value;
    localStorage.setItem("playerOneLogin" , player1Login);
    localStorage.setItem("playerTwoLogin" , player2Login);
    window.location.replace("game_page.html");
}

