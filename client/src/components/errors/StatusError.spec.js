import React from "react";
import { shallow} from "enzyme";
import { StatusError, StatusErrorDiv } from "./";
import { Button } from "../../shared";

import { theme } from "../../shared";
import renderer from "react-test-renderer";
import "jest-styled-components";

const setUp = (
  props = { title: 404, description: "Not found", color: theme.colors.statusErrorBackground }
) => {
  const component = shallow(<StatusError {...props} />);
  return component;
};
// describe("Status error component",()=>{
//     it('matches the snapshot',()=>{
//         const tree=renderer.create(

//                 <StatusError/>

//         ).toJSON()

//         expect(tree).toMatchSnapshot()
//     })
// })

describe("StatusError component", () => {
  let component;

  beforeEach(() => {
    component=setUp();
  });

  afterEach(() => {
    component.unmount();
  });

  it("it should render one button", () => {
    console.log(component.debug());
    const wrapper = component.find(Button);
    console.log(wrapper);
    expect(wrapper.length).toBe(1);
  });
});




describe("StatusErrorDiv styled component snapshot testing", () => {
  it("Snapshot for StatusErrorDiv", () => {
    const tree = renderer.create(<StatusErrorDiv theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
