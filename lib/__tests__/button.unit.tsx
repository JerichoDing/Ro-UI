import renderer from 'react-test-renderer';
import React from 'react';
import Button from '../button/button';
describe('button 测试开始', () => {
  it('是个div', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  });
});
