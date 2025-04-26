import { tests } from './../../data/tests.data';
import { Component, computed, signal } from '@angular/core';
import { Test } from './../../interfaces/test';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-card-question',
  imports: [PaginationComponent],
  templateUrl: './card-question.component.html',
})
export class CardQuestionComponent {
  tests = signal<Test[]>(tests);
  currentPage = signal(0);

  selectedOptions = signal<Record<number, number>>({});

  currentTest = computed(() => {
    return this.tests()[this.currentPage()];
  });

  get totalPages() {
    return this.tests().length;
  }

  selectOption(questionId: number, optionId: number) {
    this.selectedOptions.update((options) => {
      // Crear una copia del objeto actual
      const newOptions = { ...options };
      // Asignar la nueva selección (reemplazando cualquier selección anterior)
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
