import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {shallowToJson} from 'enzyme-to-json';
import { showingStatus } from "../../const";
import { App } from "./app";

Enzyme.configure({adapter: new Adapter()});

describe(`render App`, () => {
  it(`Should App render correctly with UNSET showing status, FALSE isLoading`, () => {
    const wrapper = shallow(<App
      addRowFormVisualStatus={showingStatus.UNSET}
      searchFormVisualStatus={showingStatus.UNSET}
      isLoading={false}
      users={[]}
    />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it(`Should App render correctly with HIDE showing status, TRUE isLoading`, () => {
    const wrapper = shallow(<App
      addRowFormVisualStatus={showingStatus.HIDE}
      searchFormVisualStatus={showingStatus.HIDE}
      isLoading={true}
      users={[]}
    />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
  
  it(`Should App render correctly with SHOW showing status, TRUE isLoading`, () => {
    const wrapper = shallow(<App
      addRowFormVisualStatus={showingStatus.SHOW}
      searchFormVisualStatus={showingStatus.SHOW}
      isLoading={true}
      users={[]}
    />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
