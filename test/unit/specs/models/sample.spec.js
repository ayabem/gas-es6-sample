import { SampleModel } from '../../../../src/models/sample';

describe('models/sample.js', () => {
  it('should return correct greeting message', () => {
    const target = 'Every'
    const sampleModel = new SampleModel(target);
    expect(sampleModel.getGreetMessage())
      .to.equal(`Hello, ${target}!`);
  });
});
