import React from "react";
import { shallow} from "enzyme";
import {findByTestAtrr} from '../../utils'
import { StatusError, StatusErrorDiv } from "./";


import { theme } from "../../shared";
import renderer from "react-test-renderer";
import "jest-styled-components";

const setUp = (
  props={}
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
 
  describe('Have props',()=>{
    let wrapper;

    beforeEach(() => {
      const props = { title: 404, description: "Not found", color: theme.colors.statusErrorBackground }
      wrapper=setUp(props);
    });
  
    afterEach(() => {
      wrapper.unmount();
    });

    it("Should render a h2",() => {
      const component=findByTestAtrr(wrapper,"statusErrorH2")
      expect(component.length).toBe(1)
    })

    it("Should render a p",() => {
      const component=findByTestAtrr(wrapper,"statusErrorText")
      expect(component.length).toBe(1)
    })
  
  
    it("Should render a button", () => {
      const component = findByTestAtrr(wrapper,"statusErrorButton")
      expect(component.length).toBe(1)
      
    });
  })

  describe("have no props",() => {

    let wrapper;
    beforeEach(() => {
     
      wrapper=setUp();
    });
    it("should not render",() => {
      const component=findByTestAtrr(wrapper,"statusErrorButton")
      expect(component.length).toBe(0)
    })
  })
});




describe("Snapshots for StatusError", () => {

  it("render correctly StatusError component",() => {
    const tree = renderer.create(<StatusError theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it("render correctly StatusErrorDiv styled component", () => {
    const tree = renderer.create(<StatusErrorDiv theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
