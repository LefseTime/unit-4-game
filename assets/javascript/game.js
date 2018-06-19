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
            var audio = new Audio(src = "assets/audio/kittenWin.mp3")
            audio.play();
            reset();
        }
        //when current exceeds goal
        else if (currentNumber > goalNumber) {
            loseNumber++;
            $(".lose").text("Losses: " + loseNumber);
            var audio = new Audio(src = "assets/audio/kittenLose.mp3")
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

/* my friend's cheater code to paste in the console and auto-solve

    function findMax(number, goal) {
    if( number == 0 ) {
        return 0;
    } else {
        return Math.floor(goal / number);
    }
}

function cheat() {
    var system = [turkeyNumber, boxNumber, lionNumber, nakedNumber];
    var maxima = system.map(x => findMax(x, goalNumber));

    var space = listPermutationsRight(maxima, 0);

    var bestClicks = -1;
    var bestSolution = undefined;

    space.forEach(function(candidate) {
        if(calc(system, candidate) == goalNumber) {
            clicks = candidate.reduce((a, b) => a + b, 0);
            if(bestClicks == -1 || clicks < bestClicks) {
                bestClicks = clicks;
                bestSolution = candidate;
            }
        }
    });

    if(bestClicks == -1) {
        console.log("A solution could not be found");
    } else {
        printSolution(bestSolution);
    }
}

function buildSolutionString(solution) {
    var names = ["turkey", "box", "lion", "naked"];

    var parts = [];

    for(var i = 0; i < solution.length; i++) {
        var times = solution[i];
        if(times != 0) {
            var suffix = " times";
            if(times == 1) {
                suffix = " time";
            }

            parts.push("the " + names[i] + " cat " + times + suffix);
        }
    }

    var solutionString = "click ";
    for(var j = 0; j < parts.length; j++) {
        if(j > 0) {
            if(j < parts.length - 1) {
                solutionString += ", ";
            } else {
                solutionString += " and ";
            }
        }

        solutionString += parts[j];
    }

    return solutionString;
}

function printSolution(solution) {
    var solutionString = buildSolutionString(solution);

    console.log("To solve with the fewest clicks, " + solutionString + ".");
}

function calc(system, coefficients) {
    var sum = 0;
    for(var i = 0; i < system.length; i++) {
        sum += system[i] * coefficients[i];
    }
    return sum;
}

function listPermutationsRight(maxima, position) {
    var permutations = [];
    if(position <= maxima.length) {
        var right = listPermutationsRight(maxima, position + 1);
        for(var i = 0; i <= maxima[position]; i++) {
            if(right.length == 0) {
                permutations.push([i]);
            } else {
                right.forEach(function(permutation) {
                    permutations.push([i].concat(permutation));
                });
            }
        }
    }
    return permutations;
}

cheat(); 
*/