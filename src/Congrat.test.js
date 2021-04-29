import React from 'react'
import { shallow } from 'enzyme';
import Congrat from './Congrat';
import { findByTestAtt } from './test/testUtils';

const setup = (props = {}) => {

 return shallow(<Congrat {...props} />)

}

test('render without error', () => {

 const wrapper = setup();
 const component = findByTestAtt(wrapper, 'component-congrat');
 expect(component.length).toBe(1);

});

test('return no text when success props is false', () => {

 const wrapper = setup({ success: false });
 const component = findByTestAtt(wrapper, 'component-congrat');
 expect(component.text()).toBe('');

});

test('show message when success props is true', () => {
 const wrapper = setup({ success: true });
 const message = findByTestAtt(wrapper, 'message');
 expect(message.text()).not.toBe('');

})