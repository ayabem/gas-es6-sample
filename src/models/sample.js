export class SampleModel {
  constructor(target) {
    this.target = target;
  }

  getGreetMessage() {
    return `Hello, ${this.target}!`;
  }
}
