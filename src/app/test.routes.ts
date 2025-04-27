import { Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { AnswersPageComponent } from './pages/answers-page/answers-page.component';

export const testRoutes: Routes = [
  {
    path: '',
    component: TestPageComponent,
  },
  {
    path: 'results',
    component: AnswersPageComponent,
  },
];

export default testRoutes;
