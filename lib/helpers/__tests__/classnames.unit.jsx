import classes from '../classnames';

describe('classes', () => {
  it('接受0个className', () => {
    const result = classes()
    expect(result).toEqual('')
  });
  it('接受1个className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  });
  it('接受2个className', () => {
    const result = classes('a','b')
    expect(result).toEqual('a b')
  });
  it('接受多个奇怪的className', () => {
    const result = classes('a',undefined,'中文',false,null,NaN,'')
    expect(result).toEqual('a 中文')
  });

});
