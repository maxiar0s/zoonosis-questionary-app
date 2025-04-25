import { tests } from './../../data/tests.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-question',
  imports: [],
  templateUrl: './card-question.component.html',
})
export class CardQuestionComponent {
  tests = tests;
}
