import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-front-page',
  imports: [],
  templateUrl: './front-page.component.html',
  standalone: true,
})
export class FrontPageComponent {
  private router = inject(Router);
  private testService = inject(TestService);

  startTest(): void {
    if (this.testService.isTestCompleted()) {
      // Si el test ya fue completado, mostrar alerta y redirigir a resultados
      alert(
        'Ya has realizado este test anteriormente. Serás redirigido a tus resultados.'
      );
      this.router.navigate(['/test/results']);
    } else {
      // Si no ha sido completado, ir a la página del test
      this.router.navigate(['/test']);
    }
  }
}
