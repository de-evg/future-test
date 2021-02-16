import React from "react";
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import { showingStatus } from "../../const";
import { App } from "./app";

describe(`render App`, () => {
  it(`Should App render correctly with UNSET showing status, FALSE isLoading`, () => {
    const wrapper = shallow(<App
      addRowFormVisualStatus={showingStatus.UNSET}
      searchFormVisualStatus={showingStatus.UNSET}
      isLoading={false}
      users={[]}
    />)
    const tree = renderer
      .create(wrapper
        ),
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should App render correctly with HIDE showing status, TRUE isLoading`, () => {
    const tree = renderer
      .create(
        <App
          addRowFormVisualStatus={showingStatus.HIDE}
          searchFormVisualStatus={showingStatus.HIDE}
          isLoading={true}
          users={[]}
        />,
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it(`Should App render correctly with SHOW showing status, TRUE isLoading`, () => {
    const tree = renderer
      .create(
        <App
          addRowFormVisualStatus={showingStatus.SHOW}
          searchFormVisualStatus={showingStatus.SHOW}
          isLoading={true}
          users={[]}
        />,
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
