import {mount} from 'enzyme'
import renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../icon';
describe('Icon 测试开始', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="wechat"/>).toJSON()
    expect(json).toMatchSnapshot()
  });
  it ('onclick successfully',()=>{
    const fn = jest.fn()
    const component = mount(<Icon name='wechat' onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
});
