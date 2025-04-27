import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  imports: [],
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  showModal = input<boolean>(false);
  unansweredQuestions = input<number>(0);

  closeModal = output<void>();
  submitTest = output<void>();

  onClose(): void {
    this.closeModal.emit();
  }

  onSubmit(): void {
    this.submitTest.emit();
  }
}
