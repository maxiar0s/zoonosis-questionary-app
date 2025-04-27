import { Component, computed, inject, signal } from '@angular/core';
import { options, Test } from '../../interfaces/test';
import { tests } from '../../data/tests.data';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers-page',
  imports: [],
  templateUrl: './answers-page.component.html',
})
export class AnswersPageComponent {
  testService = inject(TestService);
  router = inject(Router);

  // Datos de las preguntas
  tests = signal<Test[]>(tests);

  // Simulación de respuestas del usuario (en un caso real, estas vendrían del componente de preguntas)
  // Formato: { idPregunta: idRespuestaSeleccionada }
  userAnswers = signal<Record<number, number>>({});

  // Calcular puntuación total
  correctAnswers = computed(() => {
    const answers = this.userAnswers();
    let correct = 0;

    for (const test of this.tests()) {
      const userAnswerId = answers[test.id];
      if (!userAnswerId) continue; // Pregunta sin responder

      // Encontrar la opción seleccionada por el usuario
      const selectedOption = test.options.find(
        (opt) => opt.id === userAnswerId
      );
      if (selectedOption && selectedOption.option === test.correct) {
        correct++;
      }
    }

    return correct;
  });

  ngOnInit() {
    // Obtener las respuestas del servicio
    this.userAnswers.set(this.testService.getAnswers());
  }

  // Verificar si una opción específica fue seleccionada por el usuario
  isSelected(questionId: number, optionId: number): boolean {
    return this.userAnswers()[questionId] === optionId;
  }

  // Verificar si una opción es correcta
  isCorrectOption(test: Test, option: options): boolean {
    return option.option === test.correct;
  }

  // Verificar si el usuario seleccionó una opción incorrecta para esta pregunta
  isIncorrectSelection(test: Test, option: options): boolean {
    const selectedOptionId = this.userAnswers()[test.id];
    if (!selectedOptionId) return false; // No seleccionó nada

    return (
      this.isSelected(test.id, option.id) && !this.isCorrectOption(test, option)
    );
  }

  // Método para volver al inicio
  goToHome(): void {
    // No necesitamos resetear el estado porque queremos mantener el test como completado
    this.router.navigate(['']);
  }
}
