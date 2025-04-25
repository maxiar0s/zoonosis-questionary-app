import { Component } from '@angular/core';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { CardQuestionComponent } from '../../components/card-question/card-question.component';
import { tests } from '../../data/tests.data';

@Component({
  selector: 'app-test-page',
  imports: [PaginationComponent, CardQuestionComponent],
  templateUrl: './test-page.component.html',
})
export class TestPageComponent {}
