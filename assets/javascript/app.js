$(document).ready(function () {


    //// creating a countdown timer 
    // look in stopwatch activity for that


    var timeleft = 30;

    var timer = setInterval(function () {
        timeleft--;

        if (timeleft == 0) {
            alert("YOU LOSE");
            clearInterval(timer);
            
        }

        $("#countdowntimer").text(timeleft);

    }, 1000);


    // created an array that contains questions and answers within an object

    const myQuestions = [
        {
            question: "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its co-creator, Nicholas Flamel, when he decided to destroy it?",
            answers: [
                "665",
                "611",
                "689"
            ],
            correctAnswer: "665"
        },
        {
            question: "Snape grilled Harry about this on his first day in Potions. Monkshood and wolfsbane are the same plant, also known as what?",
            answers: [
                "Alihotsy",
                "Agrippa",
                "Aconite"
            ],
            correctAnswer: "Aconite"
        },
        {
            question: "New students need to learn the secrets of the castle. How many staircases does Hogwarts have?",
            answers: [
                "201",
                "142",
                "187",
                "99"
            ],
            correctAnswer: "142"
        },
        {
            question: "For Harry's 17th birthday, what colour did Hermione turn the leaves of the Weasley’s crabapple tree?",
            answers: [
                "Silver",
                "Gold",
                "Bronze"
            ],
            correctAnswer: "Gold"
        },
        {
            question: "Harry is known for his talents in Quidditch. What is the max speed for a Firebolt broomstick?",
            answers: [
                "100 mph",
                "200 mph",
                "150 mph"
            ],
            correctAnswer: "150 mph"
        },
        {
            question: "Quidditch players are constantly at risk of injury throughout the game. How many possible Quidditch fouls are there?",
            answers: [
                "300",
                "700",
                "500"
            ],
            correctAnswer: "700"
        },
        {
            question: "Harry first took the Knight Bus in The Prisoner of Azkaban. How much does a ticket cost if it includes hot chocolate?",
            answers: [
                "10 sickles",
                "14 sickles",
                "17 sickles"
            ],
            correctAnswer: "14 sickles"
        },
        {
            question: "In the Quidditch World Cup, Ireland's team had three main chasers: Mullet, Troy, and Moran. Which one scored the first goal?",
            answers: [
                "Troy",
                "Mullet",
                "Moran"
            ],
            correctAnswer: "Troy"
        },
    ];

    /// creates a for loop that will run through the questions array

    for (var i = 0; i < myQuestions.length; i++) {
        console.log('hi')

        // creates a div of form group and adds label, line break, and adds questions
        var $formGroup = $("<div class='form-group'>")
            .append($("<label>" + myQuestions[i].question + "</label>"))
            .append($("<br>"));

        // creates a loop that adds the answers 
        for (var j = 0; j < myQuestions[i].answers.length; j++) {

            // creates the value for the button
            var $label = $("<label class='form-check-label'>")
                .text(myQuestions[i].answers[j]);

            // creates the radio button
            var $input = $("<input type='radio' class='form-check-input'>")
                // creates the name so the answers cant all be clicked
                .attr("name", "q" + i).attr("value", myQuestions[i].answers[j]);

            // creates a variable that holds the input and label inside of it 
            var $formCheck = $("<div class='form-check form-check-inline'>")
                .append($input)
                .append($label);

            // adding the form check to the form group
            $formGroup.append($formCheck);
        }

        // puts the variable( which holds the data) into the form elemen 

        $("form").append($formGroup);
    }
    // ccheck computer value vs user value 

    // $(".form-group input:checked").each(function (index) {
    //     var value = this.value;
    //     if (myQuestions[index].correctAnswer === value) {
    //         userAnswers.push(value);
    //         rightAnswers++;
    //     }
    // });

    // var rightAnswers = 0;
    // var userAnswers = [];
    // console.log(userAnswers)

    

    var submitButton = $("#submit");

    $("#submit").click(function () {
        var rightAnswers = 0;
        var userAnswers = [];

        $(".form-group input:checked").each(function (index) {
            var value = this.value;
            if (myQuestions[index].correctAnswer === value) {
                userAnswers.push(value);
                rightAnswers++;
            }
        });

        var resultText = "<p>You were " + rightAnswers + " out of " + myQuestions.length + "</p>"
        $("#results").append($(resultText))

    });


    // console.log(userAnswers);
    // console.log(this.value)

    // how to get user value 
    // var userValue = $("input[name='form-check-input']:checked").val();
    // console.log(userValue.value)

    // for (let index = 0; index < myQuestions.length; index++) {
    //     var userValue = $("input[name='q" + index + "']:checked").val();
    //     userAnswers.push(userValue);
    //     console.log(userValue);
    // }


    // $.each($("input[name='question-0']:checked"), function () {
    //     if ($(this).val() == myQuestions[0].correctAnswer) {
    //         game.correct++;
    //     } else {
    //         game.incorrect++;
    //     }
    // })
    // userAnswers.push(userValue);


    // var quizContainer =$("#quiz");






});