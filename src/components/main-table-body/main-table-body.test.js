import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { MainTableBody } from "./main-table-body";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const user = {
  id: 2,
  firstName: `Petr`,
  lastName: `Petrov`,
  email: `petr@mail.ru`,
  phone: `89105507671`,
  address: {
    streetAddress: "9792 Mattis Ct",
    city: "Waukesha",
    state: "WI",
    zip: "22178",
  },
  description: "et lacus magna dolor...",
};

it(`Render MainTableBody correctly`, () => {
  const wrapper = shallow(
    <MainTableBody
      users={[user, user, user]}
      activeRow={"row1"}
      setActiveRow={() => {}}
      currentStep={50}
      updateCount={() => {}}
    />
  );
  const tree = shallowToJson(wrapper);
  expect(tree).toMatchSnapshot();
});
