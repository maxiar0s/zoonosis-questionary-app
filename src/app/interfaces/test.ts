export interface Test {
  id: number;
  question: string;
  options: options[];
  correct: string;
}

export interface options {
  id: number;
  option: string;
}
