import { SampleModel } from '../models/sample';

export function greetGas() {
  const sampleModel = new SampleModel('GAS');
  return sampleModel.getGreetMessage();
}
