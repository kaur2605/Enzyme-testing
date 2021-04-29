import React from 'react'
import { shallow } from 'enzyme';
import GuessWords from './GuessWords'
import { findByTestAtt } from './test/testUtils';

const setup = (props = {}) => {
 return shallow(<GuessWords {...props} />)

}

test('render without error', () => {

 const wrapper = setup();
 const component = findByTestAtt(wrapper, 'component-guessed');
 expect(component.length).toBe(1);

});

describe('show text when not word is guessed', () => {
 const wrapper = setup();
 const instruction = findByTestAtt(wrapper, 'instructions');
 expect(instruction.text()).not.toBe('');

})