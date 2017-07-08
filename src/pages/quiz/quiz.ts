import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector    : 'page-quiz',
  templateUrl : 'quiz.html'
})




export class QuizPage{

  quiz     : any[];      // the quiz object
  current  : any[];      // the current quiz item:  question, choices, solution
  letter   : any[];      // used to decode a choice's letter using its index
  index    : number;     // the current quiz item index
  total    : number;     // total number of questions for the quiz
  correct  : number;     // number of correct answers
  score    : number;     // final score shown in results




  constructor( public navCtrl: NavController ){

    this.quiz = [{
      question : 'Which year was the first Apple computer released?',
      choices  : ['1974','1976','1977','1979'],
      solution : '1976',
      answer   : undefined
      },{
      question : 'Which year was the first iPhone released?',
      choices  : ['2004','2005','2007','2008'],
      solution : '2007',
      answer   : undefined
      },{
      question : 'With over 17 million units produced, which of these was the highest selling personal computer model ever?',
      choices  : ['MSX','Apple II','Acer Aspire','Commodore 64'],
      solution : 'Commodore 64',
      answer   : undefined
      },{
      question : 'Which company invented the floppy disk?',
      choices  : ['Bell Labs','RAND','IBM','RCA'],
      solution : 'IBM',
      answer   : undefined
      },{
      question : 'Who is credited with inventing the first mechanical computer?',
      choices  : ['Kevin Mitnick','Charles Babbage','John McCarthy','Tim Berners-Lee'],
      solution : 'Charles Babbage',
      answer   : undefined
      },{
      question : 'Which of these people worked with Ken Thompson to pioneer the C programming language and the Unix Operating System?',
      choices  : ['Dennis Rodman','Dennis Ritchie','Lionel Richie','Andrew Auernheimer'],
      solution : 'Dennis Ritchie',
      answer   : undefined
      },{
      question : 'The first computer mouse was constructed in 1964 with what material?',
      choices  : ['wood','linoleum','plastic','tin foil'],
      solution : 'wood',
      answer   : undefined
      },{
      question : 'Fonts that contain small decorative lines at the end of a stroke are known as what?',
      choices  : ['wingdings','surf','sans serif','serif'],
      solution : 'serif',
      answer   : undefined
    }];



    this.letter  = ['a','b','c','d','e'];
    this.index   = 0;
    this.correct = 0;
    this.score   = 0;
    this.current = this.quiz[this.index];
    this.total   = Object.keys(this.quiz).length

  } // end_constructor




  grade( choice, current, quiz ){

    current.answer = current.choices[choice];
    if( current.solution == current.choices[choice] ) this.correct++;
    this.score = this.correct / this.total * 100;

    if( this.total != this.index+1 ){
      this.index ++;
      this.current  = this.quiz[this.index];
    }
    else this.navCtrl.push( ResultPage, { quiz:quiz, score:this.score });

  } // end_grade
} // end_class
