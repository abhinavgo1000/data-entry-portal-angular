import { TelephoneFormatterPipe } from './telephone-formatter.pipe';

describe('TelephoneFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new TelephoneFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
