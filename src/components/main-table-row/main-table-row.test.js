import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import MainTableRow from './main-table-row';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

it(`Render MainTableRow correctly`, () => {
  const wrapper = shallow(<MainTableRow activeRow={"row1"} setActiveRow={() => { }} rowID={"row1"}
    user={{id: 0, firstName: "X", lastName: "X", email: "email@email.ru", phone: 99999999, address: {}, description: "XXX"}} />);
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});