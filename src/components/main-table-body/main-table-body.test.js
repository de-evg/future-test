import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {MainTableBody} from './main-table-body';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

it(`Render MainTableBody correctly`, () => {
  const wrapper = shallow(<MainTableBody users={["user", "user", "user"]} activeRow={"row1"} setActiveRow={() => {}} currentStep={50} />);
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});
