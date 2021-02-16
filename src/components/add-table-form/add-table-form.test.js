import React from 'react';
import renderer from "react-test-renderer";
import {showingStatus} from '../../const';
import {AddTableForm} from "./add-table-form";

describe(`Render AddTableForm`, () => {
  it(`Should AddTableForm render correctly with UNSET showing status`, () => {
    const tree = renderer
      .create(
        <AddTableForm
          addRowFormVisualStatus={showingStatus.UNSET}
          submitNewRow={() => {}}
            />, {
          createNodeMock: () => {
            return {};
          }
        }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
  });

  it(`Should AddTableForm render correctly with SHOW showing status`, () => {
    const tree = renderer
      .create(
        <AddTableForm
          addRowFormVisualStatus={showingStatus.SHOW}
          submitNewRow={() => {}}
            />, {
          createNodeMock: () => {
            return {};
          }
        }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
  });
  
  it(`Should AddTableForm render correctly with HIDE showing status`, () => {
    const tree = renderer
      .create(
        <AddTableForm
          addRowFormVisualStatus={showingStatus.HIDE}
          submitNewRow={() => {}}
            />, {
          createNodeMock: () => {
            return {};
          }
        }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
  });
});
