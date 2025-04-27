import { tests } from './../../data/tests.data';
import { Component, computed, inject, signal } from '@angular/core';
import { Test } from './../../interfaces/test';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-card-question',
  imports: [PaginationComponent],
  templateUrl: './card-question.component.html',
})
export class CardQuestionComponent {
  testService = inject(TestService);

  tests = signal<Test[]>(tests);
  currentPage = signal(0);

  //NOTE Señal computada para recorrer un array
  selectedOptions = signal<Record<number, number>>({});

  currentTest = computed(() => {
    return this.tests()[this.currentPage()];
  });

  get totalPages() {
    return this.tests().length;
  }

  selectOption(questionId: number, optionId: number) {
    // Guardar la respuesta en el servicio
    this.testService.saveAnswer(questionId, optionId);

    // Actualizar la UI local
    this.selectedOptions.update((options) => {
      const newOptions = { ...options };
      newOptions[questionId] = optionId;
      return newOptions;
    });
  }

  isSelected(questionId?: number, optionId?: number): boolean {
    if (!questionId || !optionId) return false;
    return this.selectedOptions()[questionId] === optionId;
  }
  onPageChange(pageIndex: number) {
    this.currentPage.set(pageIndex - 1);
  }
}
