import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {MainTableHead} from './main-table-head';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

it(`Render MainTableHead correctly`, () => {
  const wrapper = shallow(<MainTableHead activeSort={`head_UP`} updateSort={() => {}} />)
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});