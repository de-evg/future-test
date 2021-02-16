import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import MainMenu from './main-menu';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

it(`Render MainMenu correctly`, () => {
  const wrapper = shallow(<MainMenu />);
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});