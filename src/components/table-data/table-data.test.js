import React from 'react';
import renderer from "react-test-renderer";
import TableData from "./table-data";

describe(`Render TableData correctly`, () => {
  it(`Should Table render correctly with STRING cellData`, () => {
    const cellData = 'some value'
    const tree = renderer
      .create(
        <TableData
          cellData={cellData}        
        />
      )
      .toJSON();
  
      expect(tree).toMatchSnapshot();
  });

  it(`Should Table render correctly with NUMBER cellData`, () => {
    const cellData = 123;
    const tree = renderer
      .create(
        <TableData
          cellData={cellData}        
        />
      )
      .toJSON();
  
      expect(tree).toMatchSnapshot();
  });
});

