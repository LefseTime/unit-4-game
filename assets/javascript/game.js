$(document).ready(function () {

    //display win and loss numbers
    var winNumber = 0;
    var loseNumber = 0;
    $(".win").text("Wins: " + winNumber);
    $(".lose").text("Losses: " + loseNumber);

    //function to reset values
    var reset = function () {
        turkeyNumber = Math.floor(Math.random() * 11) + 1;
        boxNumber = Math.floor(Math.random() * 11) + 1;
        lionNumber = Math.floor(Math.random() * 11) + 1;
        nakedNumber = Math.floor(Math.random() * 11) + 1;
        currentNumber = 0;
        $(".current").text("Current: " + currentNumber);
        goalNumber = Math.floor(Math.random() * 101) + 19;
        $(".goal").text("Goal: " + goalNumber);
    }

    reset();

    // //function to win or lose
    var newRound = function () {
        if (currentNumber === goalNumber) {
            winNumber++;
            $(".win").text("Wins: " + winNumber);
            var audio = new Audio (src="assets/audio/kittenWin.mp3")
            audio.play();
            reset();
        }
        //when current exceeds goal
        else if (currentNumber > goalNumber) {
            loseNumber++;
            $(".lose").text("Losses: " + loseNumber);
            var audio = new Audio (src="assets/audio/kittenLose.mp3")
            audio.play();
            reset();
        }
        //else do nothing
        else { }
    }

    //when turkey clicked
    $(".turkey").on("click", function () {
        //add turkeyNumber to currentNumber
        currentNumber += turkeyNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
        newRound();
    })

    //when box clicked
    $(".box").on("click", function () {
        //add turkeyNumber to currentNumber
        currentNumber += boxNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
        newRound();
    })

    //when lion clicked
    $(".lion").on("click", function () {
        //add turkeyNumber to currentNumber
        currentNumber += lionNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
        newRound();
    })

    //when naked clicked
    $(".naked").on("click", function () {
        //add turkeyNumber to currentNumber
        currentNumber += nakedNumber;
        // console.log(currentNumber);
        //display new currentNumber in html
        $(".current").text("Current: " + currentNumber);
        newRound();
    })

});