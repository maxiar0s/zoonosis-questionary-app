import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  totalPages = input<number>(10);
  currentPage = input<number>(1);
  pageChange = output<number>();

  pageNumbers = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, idx) => idx + 1);
  });

  changePage(pageIdx: number) {
    if (pageIdx > 0 && pageIdx <= this.totalPages()) {
      this.pageChange.emit(pageIdx);
    }
  }

  /*   next() {
    this.changePage(this.currentPage() + 1);
  }

  previous() {
    this.changePage(this.currentPage() - 1);
  } */
}
