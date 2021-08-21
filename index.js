var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question('What is your name ? ');
console.log('Hello '+ chalk.red.bold(userName +'!') + ' Welcome to the Anime Quiz.');
console.log(chalk.green.bgBlack('---------------------------------------------------'))
console.log(chalk.green.bgBlack('NOTE:'))
console.log(chalk.green.bgBlack('You get +1 for each right answer and -1 for each wrong answer.'))
console.log(chalk.green.bgBlack('---------------------------------------------------'))

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer === answer){
    console.log(chalk.green.bold('You are right!'));
    score = score+1;
  }
  else{
    console.log(chalk.red.bold('You are wrong! Right answer was '+ answer));
    score = score-1;
  }

  console.log(chalk.blue.bold('Current score : '+ score));
  console.log(chalk.cyan.bgBlack('----------------------------------'));
}


var questions = [{
  question: "What is the name of protagonist in Dragon Ball Z? \n \
  a) Goku \n \
  b) Saitama \n \
  c) Sasuke \n ",
  answer: "a"
}, {
  question: "Which anime features character named Saitama? \n \
  a) DBZ \n \
  b) Death Note \n \
  c) One Punch Man \n ",
  answer: "c"
}, {
  question: "Who is the seventh Hokage of leaf village? \n \
  a) Hashirama Senju \n \
  b) Naruto Uzumaki \n \
  c) Hiruzen Sarutobi \n ",
  answer: "b"
}, {
  question: "What is the name of 9 tailed beast? \n \
  a) Kurama \n \
  b) Fox Spirit \n \
  c) Orange Beast \n ",
  answer: "a"
}, {
  question: "which pokemon of Ash doesn't like to go inside a pokeball? \n \
  a) Bulbasaur \n \
  b) Squirtle \n \
  c) Pikachu \n ",
  answer: "c"
}]

for(var i=0; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.answer)

}

console.log('YAY! You scored: ' + score);