player1_Name = localStorage.getItem("p1name");
player2_Name = localStorage.getItem("p2name");
player1Score = 0;
player2Score = 0;
Qturn = "p1";
Aturn = "p2";
document.getElementById("player1_name").innerHTML = player1_Name;
document.getElementById("player2_name").innerHTML = player2_Name;

document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

document.getElementById("Qq_turn").innerHTML = "Question Turn:" + player1_Name;
document.getElementById("Aa_turn").innerHTML = "Answer Turn:" + player2_Name;

function sendWord() {
    QqWord = document.getElementById("word").value;
    QqWord = QqWord.toLowerCase();
    letter2 = QqWord.charAt(1);
    letter_La=QqWord.charAt(QqWord.length-1);
    Letter_Mi=QqWord.charAt(Math.floor(QqWord.length/2));

    console.log(letter2,letter_La,Letter_Mi);
    replace_word=QqWord.replace(letter2,"_");
    console.log(replace_word);
    replace_word=replace_word.replace(letter_La,"_");
    console.log(replace_word);
    replace_word=replace_word.replace(Letter_Mi,"_");


 q_tag='<h3 id="word_display">Q : '+replace_word+'</h3>';
 input_tag='<br>Answer : <input id="answerInput">';
 butonTag='<br><br> <button class="btn btn-info" onclick="checkAnswer()">Check</button>';

 row=q_tag+input_tag+butonTag;

 document.getElementById("output").innerHTML=row;
 document.getElementById("word").value="";
}
function checkAnswer(){
    answer = document.getElementById("answerInput").value;
    answer= answer.toLowerCase();
    if (answer==QqWord) {
        if (Aturn=="p1") {
            player1Score+=1;
            document.getElementById("player1_score").innerHTML=player1Score;
        }
        else{
            player2Score+=1;
            document.getElementById("player2_score").innerHTML=player2Score;
        }
    }
    else{
        alert("Wrong answer hahahahaaa!!!!!!!!! correct answer "+QqWord);
    }
    if (Qturn=="p1") {
        Qturn="p2";
        Aturn="p1";
        document.getElementById("Qq_turn").innerHTML = "Question Turn:" + player2_Name;
        document.getElementById("Aa_turn").innerHTML = "Answer Turn:" + player1_Name;
    }
    else{
        Qturn="p1";
        Aturn="p2";
        document.getElementById("Qq_turn").innerHTML = "Question Turn:" + player1_Name;
        document.getElementById("Aa_turn").innerHTML = "Answer Turn:" + player2_Name;
    }
    document.getElementById("output").innerHTML="";
}
