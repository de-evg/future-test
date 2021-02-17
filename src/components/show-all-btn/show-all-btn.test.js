import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { ShowAllBtn } from "./show-all-btn";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it(`Reder ShowAllBtn correctly`, () => {
  const wrapper = shallow(
    <ShowAllBtn loadFullData={() => {}} setIsLoadingStatus={() => {}} />
  );
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});
