/**
 * Coding Challenge : Quiz game in the console !
 */
/*
(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function() { 
        console.log(this.question);
        
        for (var i=0; i<this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correctAnswer) {
            console.log('Answer is correct!');
        } else {
            console.log('Incorrect answer! Try again :)');
        }
    }
    var q1 = new Question('What is teacher\'s name in this course',
                        ['John', 'Mike', 'Jonas'], 
                        2);
    
    var q2 = new Question('Is it going good ?',
                        ['No', 'Yes', 'Can\'t really say'], 
                        1);
    
    var q3 = new Question('How are the lectures',
                        ['Boring', 'Hard', 'fun', 'Okay-ish'], 
                        2);
    
    
    var q4 = new Question('Is JavaScript the coolest language in the world ?',
                        ['Yes', 'No'], 
                        0);
    
    var question = [q1, q2, q3, q4];
    
    var n = Math.floor(Math.random() * question.length);
    
    question[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.'));
    question[n].checkAnswer(answer);
})();
*/
// var correctAs = 0;
// var sc = 0;
(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function() { 
        console.log(this.question);
        
        for (var i=0; i<this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callBack) {
        var sc;
        if(ans === this.correctAnswer) {
            // correctAs++;
            console.log('Answer is correct!');
            sc = callBack(true);
            // console.log('Your score is ' + correctAs);
            // console.log('==============================');
        } else {
            console.log('Incorrect answer! Try again :)');
            sc = callBack(false);
            // console.log('Your score is ' + correctAs);
            // console.log('==============================');
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('==============================');
    }
    var q1 = new Question('What is teacher\'s name in this course',
                        ['John', 'Mike', 'Jonas'], 
                        2);
    
    var q2 = new Question('Is it going good ?',
                        ['No', 'Yes', 'Can\'t really say'], 
                        1);
    
    var q3 = new Question('How are the lectures',
                        ['Boring', 'Hard', 'fun', 'Okay-ish'], 
                        2);
    
    
    var q4 = new Question('Is JavaScript the coolest language in the world ?',
                        ['Yes', 'No'], 
                        0);

    
    var question = [q1, q2, q3, q4];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc ++;
            } 
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
    var n = Math.floor(Math.random() * question.length);
    
    question[n].displayQuestion();
    
    var answer = prompt('Please select the correct answer.');
    
    if(answer !== 'exit') {
        question[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }

    }

    nextQuestion();
    
})();