import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private readonly STORAGE_KEY = 'zoonosis_test_answers';
  private readonly COMPLETED_KEY = 'zoonosis_test_completed';

  // Almacena las respuestas seleccionadas por el usuario
  // Formato: { idPregunta: idRespuestaSeleccionada }
  userAnswers = signal<Record<number, number>>(this.loadAnswersFromStorage());

  constructor() {
    // Cargar respuestas guardadas al iniciar el servicio
    this.loadAnswersFromStorage();
  }

  // Método para guardar una respuesta
  saveAnswer(questionId: number, optionId: number): void {
    this.userAnswers.update((answers) => {
      const updatedAnswers = { ...answers, [questionId]: optionId };
      // Guardar en localStorage cada vez que se actualiza
      this.saveAnswersToStorage(updatedAnswers);
      return updatedAnswers;
    });
  }

  // Método para obtener todas las respuestas
  getAnswers(): Record<number, number> {
    return this.userAnswers();
  }

  // Método para reiniciar las respuestas
  resetAnswers(): void {
    this.userAnswers.set({});
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Método para marcar el test como completado
  markTestAsCompleted(): void {
    localStorage.setItem(this.COMPLETED_KEY, 'true');
    this.saveAnswersToStorage(this.userAnswers());
  }

  // Método para verificar si el test ya fue completado
  isTestCompleted(): boolean {
    return localStorage.getItem(this.COMPLETED_KEY) === 'true';
  }

  resetTestState(): void {
    this.resetAnswers();
    localStorage.removeItem(this.COMPLETED_KEY);
  }

  // Método privado para guardar respuestas en localStorage
  private saveAnswersToStorage(answers: Record<number, number>): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(answers));
  }

  // Método privado para cargar respuestas desde localStorage
  private loadAnswersFromStorage(): Record<number, number> {
    const savedAnswers = localStorage.getItem(this.STORAGE_KEY);
    if (savedAnswers) {
      try {
        return JSON.parse(savedAnswers);
      } catch (e) {
        console.error('Error parsing saved answers:', e);
      }
    }
    return {};
  }
}
