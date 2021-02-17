import React from "react";
import Enzyme, { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { ShowAddFormBtn } from "./show-add-form-btn";
import Adapter from "enzyme-adapter-react-16";
import { showingStatus } from "../../const";

Enzyme.configure({ adapter: new Adapter() });

describe(`Render ShowAddFormBtn correctly`, () => {
  it(`Reder ShowAddFormBtn correctly with UNSET showing status, TRUE isLoading`, () => {
    const wrapper = shallow(
      <ShowAddFormBtn
        updateShowStatus={() => {}}
        addRowFormVisualStatus={showingStatus.UNSET}
        isLoading={true}
        users={[{}, {}, {}]}
      />
    );
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it(`Reder ShowAddFormBtn correctly with SHOW showing status, FALSE isLoading`, () => {
    const wrapper = shallow(
      <ShowAddFormBtn
        updateShowStatus={() => {}}
        addRowFormVisualStatus={showingStatus.SHOW}
        isLoading={false}
        users={[{}, {}, {}]}
      />
    );
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it(`Reder ShowAddFormBtn correctly with HIDE showing status, FALSE isLoading`, () => {
    const wrapper = shallow(
      <ShowAddFormBtn
        updateShowStatus={() => {}}
        addRowFormVisualStatus={showingStatus.HIDE}
        isLoading={false}
        users={[{}, {}, {}]}
      />
    );
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
