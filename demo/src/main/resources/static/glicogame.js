let userScore = 0;
let computerScore = 0;

function userChoice(userHand) {
    const hands = ['グー', 'チョキ', 'パー'];
    const computerHand = hands[Math.floor(Math.random() * hands.length)];

    let result = "";

    if (userHand === computerHand) {
        result = "引き分けです。";
        document.getElementById("result").style.color = "black";
    } else if ((userHand === "グー" && computerHand === "チョキ") ||
               (userHand === "チョキ" && computerHand === "パー") ||
               (userHand === "パー" && computerHand === "グー")) {
        result = "あなたの勝ちです！";
        document.getElementById("result").style.color = "blue";
        if(userHand === "グー"){
            userScore= userScore + 3;
        }else if(userHand === "チョキ"){
            userScore= userScore + 6;
        }else if(userHand === "パー"){
            userScore= userScore + 6;
        }
        
    } else {
        result = "あなたの負けです。";
        document.getElementById("result").style.color = "red";
        if(userHand === "グー"){
            computerScore= computerScore + 6;
        }else if(userHand === "チョキ"){
            computerScore= computerScore + 3;
        }else if(userHand === "パー"){
            computerScore= computerScore + 6;
        }
    }

    document.getElementById("result").textContent = "あなたは " + userHand + " を出しました。コンピュータは " + computerHand + " を出しました。" + result;
    updateScore();
}

function updateScore() {
    document.getElementById("score").textContent = "スコア: あなた " + userScore + " - コンピュータ " + computerScore;
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById("result").textContent = "";
    document.getElementById("result").style.color = "black";
}

function setGoal() {
    goalScore = parseInt(document.getElementById('Goal').value);
    //通常表示
    if (isNaN(goalScore)) {
        alert('有効な数値を入力してください。');
        return;
    }
    document.getElementById("goalDisplay").textContent = `目標歩数: ${goalScore}`;
}

