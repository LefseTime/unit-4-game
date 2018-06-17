$(document).ready(function () {
    
    //generate random goal number 19-120 and write in html
    var goalNumber = Math.floor(Math.random() * 102) + 19;
    // console.log(goalNumber);
    $(".goal").text("Goal: " + goalNumber);

    //set current number to 0, and generate random values for each kitty
    var currentNumber = 0;
    var winNumber = 0;
    var loseNumber = 0;
    var turkeyNumber = Math.floor(Math.random() * 11) + 1;
    var boxNumber = Math.floor(Math.random() * 11) + 1;
    var lionNumber = Math.floor(Math.random() * 11) + 1;
    var nakedNumber = Math.floor(Math.random() * 11) + 1;

    //when turkey clicked
    $(".turkey").on("click", function() {
        //add turkeyNumber to currentNumber
        currentNumber += turkeyNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
    })

    //when box clicked
    $(".box").on("click", function() {
        //add turkeyNumber to currentNumber
        currentNumber += boxNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
    })

    //when lion clicked
    $(".lion").on("click", function() {
        //add turkeyNumber to currentNumber
        currentNumber += lionNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
    })

    //when naked clicked
    $(".naked").on("click", function() {
        //add turkeyNumber to currentNumber
        currentNumber += nakedNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
    })

    //when goal and current match
    if ( currentNumber === goalNumber ) {
        winNumber += winNumber;
        $(".win").text("Wins: " + winNumber);
        console.log(winNumber);
    }
    //when current exceeds goal
    else if ( currentNumber > goalNumber ) {
        loseNumber += loseNumber;
        $(".lose").text("Losses: " + loseNumber);
        console.log(loseNumber);
    }
    //else do nothing
    else {}
    
});