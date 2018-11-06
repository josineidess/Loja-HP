import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  esconder: boolean;
  menu: boolean;
  config: boolean;
  credit: boolean;
  constructor() {
    this.menu = false;
    this.esconder = true;
    this.config = true;
    this.credit = true;
  }

  ngOnInit() {
  }

}
