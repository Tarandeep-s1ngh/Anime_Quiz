var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question('What is your name ? ');
console.log('Hello '+ chalk.red.bold(userName +'!') + ' Welcome to the Anime Quiz.');
console.log(chalk.green.bgBlack('---------------------------------------------------'))
console.log(chalk.green.bgBlack('NOTE:'))
console.log(chalk.green.bgBlack('Please type all the answers in lowercase.'))
console.log(chalk.green.bgBlack('You get +1 for each right answer and -1 for each wrong answer.'))
console.log(chalk.green.bgBlack('---------------------------------------------------'))

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer === answer){
    console.log(chalk.red.bold('You are right!'));
    score = score+1;
  }
  else{
    console.log(chalk.red.bold('You are wrong! Right answer was '+ answer));
    score = score-1;
  }

  console.log(chalk.blue.bold('Current score : '+ score));
  console.log(chalk.green.bgBlack('----------------------------------'));
}


var questions = [{
  question: "What is the name of protagonist in Dragon Ball Z? ",
  answer: "goku"
}, {
  question: "Which anime features character named Saitama? ",
  answer: "one punch man"
}, {
  question: "Who is the seventh Hokage of leaf village? ",
  answer: "naruto uzumaki"
}, {
  question: "which pokemon of Ash doesn't like to go inside a pokeball? ",
  answer: "pikachu"
}]

for(var i=0; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.answer)

}

console.log('YAY! You scored: ' + score);
