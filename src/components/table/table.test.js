import React, {createElement} from 'react';
import renderer from "react-test-renderer";
import Table from "./table";

it(`Should Table render correctly`, () => {
  const tableBody = createElement(`tbody`);
  const tableHead = createElement(`thead`);
  const tree = renderer
    .create(
      <Table
        TableBody={tableBody}
        TableHead={tableHead}
      />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
});