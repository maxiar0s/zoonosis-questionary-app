import { Routes } from '@angular/router';
import { FrontPageComponent } from './shared/front-page/front-page.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
  },
  {
    path: 'test',
    loadChildren: () => import('./test.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
