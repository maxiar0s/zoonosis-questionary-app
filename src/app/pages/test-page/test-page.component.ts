import { Component, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardQuestionComponent } from '../../components/card-question/card-question.component';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { tests } from '../../data/tests.data';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test-page',
  imports: [CardQuestionComponent, ConfirmationModalComponent],
  templateUrl: './test-page.component.html',
})
export class TestPageComponent {
  @ViewChild(CardQuestionComponent)
  cardQuestionComponent!: CardQuestionComponent;

  showModal = signal(false);
  totalQuestions = tests.length;

  constructor(private router: Router, private testService: TestService) {
    // Verificar si el usuario ya completó el test
    this.checkIfTestCompleted();
  }

  private checkIfTestCompleted(): void {
    if (this.testService.isTestCompleted()) {
      // Redirigir a la página de resultados si el test ya fue completado
      this.router.navigate(['/test/results']);
    }
  }

  get answeredQuestions(): number {
    if (!this.cardQuestionComponent) return 0;
    return Object.keys(this.cardQuestionComponent.selectedOptions()).length;
  }

  get unansweredQuestions(): number {
    return this.totalQuestions - this.answeredQuestions;
  }

  openModal(): void {
    // Solo mostrar el modal si hay preguntas sin responder
    if (this.unansweredQuestions > 0) {
      this.showModal.set(true);
    } else {
      this.navigateToAnswersPage();
    }
  }

  closeModal(): void {
    this.showModal.set(false);
  }

  submitTest(): void {
    // Marcar el test como completado
    this.testService.markTestAsCompleted();
    this.navigateToAnswersPage();
  }

  navigateToAnswersPage(): void {
    this.router.navigate(['/test/results']);
  }
}
