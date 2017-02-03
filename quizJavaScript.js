function main() {

        var current = 0;
        var score = 0;


        function populate(doAgain) {
            if (doAgain === true) {
                $("p").text(questionArray[current].quest);
                $(".answers").empty();

                for (var i in questionArray[current].choices) {
                    $(".answers").append("<tr><td>" + questionArray[current].choices[i] + "</td><td><input type='radio' name='answer' id=" + i + " /></td></tr>");

                }
            } else {
                $("body").empty();
                $("body").append("<p>Your final score is " + score + "/" + questionArray.length + "</p>");

            }
            $("body").fadeIn(300);

        }

        populate(true);

        $("#nextButton").click(function() {
            if ($("input:checked").val()) {
                $("body").fadeOut(300);
                var selected = parseInt($("input:checked").attr("id"));
                var correct = questionArray[current].answer;
                if (selected === correct) {
                    score++;
                }

                setTimeout(function() {

                    if (current < questionArray.length - 1) {

                        current++;

                        populate(true);

                    } else {

                        populate(false);


                    }
                }, 300)
            } else {
                alert("nothing has been checked!");
                event.preventDefault();
            }


            event.preventDefault();
        })

        $("input").click(function() {

        })

    }

    var questionArray = [];

    function Question(quest, choices, answer) {
        this.quest = quest;
        this.choices = choices;
        this.answer = answer;

        questionArray.push(this);
    }



    var q1Answers = ["Pia", "dog", "fish", "brernard"];
    var q2Answers = ["silly", "stinky", "butt", "Amy"];
    var q3Answers = ["phone", "comp", "Tim", "mouse"];

    var q1 = new Question("what is our cats name?", q1Answers, 0);
    var q2 = new Question("what is my wifes name?", q2Answers, 3);
    var q3 = new Question("what is my name?", q3Answers, 2);

    console.log(q1.choices.length);



    $(document).ready(main);