import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {Pagination} from './pagination';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

it(`Render Pagination correctly`, () => {
    const wrapper = shallow(<Pagination userCount={500} currentStep={50} setStep={() => { }} />);
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
});