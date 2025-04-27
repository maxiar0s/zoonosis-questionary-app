import { Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { AnswersPageComponent } from './pages/answers-page/answers-page.component';
import { inject } from '@angular/core';
import { TestService } from './services/test.service';
import { Router } from '@angular/router';

// Guard para verificar si el test ya fue completado
const testCompletedGuard = () => {
  const testService = inject(TestService);
  const router = inject(Router);

  if (testService.isTestCompleted()) {
    // Si el test ya fue completado, redirigir a la página de resultados
    return router.parseUrl('/test/results');
  }

  // Si no ha sido completado, permitir el acceso
  return true;
};

export const testRoutes: Routes = [
  {
    path: '',
    canActivate: [testCompletedGuard],
    component: TestPageComponent,
  },
  {
    path: 'results',
    component: AnswersPageComponent,
  },
];

export default testRoutes;
