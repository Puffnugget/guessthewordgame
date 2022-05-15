player1Name = localStorage.getItem("playerOneLogin");
player2Name = localStorage.getItem("playerTwoLogin");
player1Score = 0;
player2Score = 0;
questionTurn = "player_1";
answerTurn = "player_2";


document.getElementById("player1Name").innerHTML = player1Name + "-";
document.getElementById("player2Name").innerHTML = player2Name + "-";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
    get_word = document.getElementById("question").value;
    word = get_word.toLowerCase();
    console.log("question is " + word);

    firstChar = word.charAt(1);
    midLocation = Math.floor(word.length / 2);
    secChar = word.charAt(midLocation);
    lastLocation = word.length - 1;
    thirdChar = word.charAt(lastLocation);

    removeChar1 = word.replace(firstChar, "_");
    removeChar2 = removeChar1.replace(secChar, "_");
    removeChar3 = removeChar2.replace(thirdChar, "_");

    checkBtn = "<button class='btn btn-success' onclick='check()'> CHECK </button> <br>";
    question = "<h4 id='questionDisplay'>" + removeChar3 + "</h4> <br>";
    answer = "<input id='answer' placeholder='Enter answer here'> <br>";
    myOutput = question + answer + checkBtn;
    document.getElementById("output").innerHTML = myOutput;
    document.getElementById("question").value = " ";
}

function check() {
    var answer = document.getElementById("answer").value;
    var lowerAnswer = answer.toLowerCase();
    console.log(lowerAnswer);

    if (lowerAnswer == word) {
        if (answerTurn == "player_1") {
            player1Score++;
            document.getElementById("player1Score").innerHTML = player1Score;
            document.getElementById("player2Score").innerHTML = player2Score;
        } else {
            player2Score++;
            document.getElementById("player1Score").innerHTML = player1Score;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    if (questionTurn == "player_1") {
        questionTurn = "player_2";
        answerTurn = "player_1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1Name;
    }
    else{
        questionTurn = "player_1";
        answerTurn = "player_2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }
    document.getElementById("output").innerHTML = " ";
}