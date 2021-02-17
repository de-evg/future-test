import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Search } from "./search";
import Adapter from "enzyme-adapter-react-16";
import {showingStatus} from "../../const";

Enzyme.configure({ adapter: new Adapter() });

describe(`Render Search correctly`, () => {
  it(`Reder Search with UNSET showing status correctly`, () => {
    const wrapper = shallow(<Search searchFormVisualStatus={showingStatus.UNSET} setFilter={() => {}}  />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it(`Reder Search with SHOW showing status correctly`, () => {
    const wrapper = shallow(<Search searchFormVisualStatus={showingStatus.SHOW} setFilter={() => {}}  />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it(`Reder Search with HIDE showing status correctly`, () => {
    const wrapper = shallow(<Search searchFormVisualStatus={showingStatus.HIDE} setFilter={() => {}}  />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
