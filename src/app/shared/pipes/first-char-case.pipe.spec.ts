import { FirstCharCasePipe } from './first-char-case.pipe';

describe('FirstCharCasePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstCharCasePipe();
    expect(pipe).toBeTruthy();
  });
});
