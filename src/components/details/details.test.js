import React from 'react';
import renderer from "react-test-renderer";
import Details from "./details";

const props = {address: {streetAddress: "", city: "", state: "", zip: ""}, description: "X", firstName: "X", lastName: "X"};

it(`Render Details correctly`, () => {
  const tree = renderer
    .create(
      <Details details={props} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
