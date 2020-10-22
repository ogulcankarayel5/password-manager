import React from "react";
import Register from "../pages/Register";
import {render, fireEvent, screen} from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
import {FormInput} from '../components/form'
import { theme } from "../shared";
import { shallow, mount } from "enzyme";

import {
  findByTestAtrr,
  makeMockStore,
  renderWithRedux,
  renderWithTheme,
  renderWithHelmet,
} from "./../Utils";

const setUp = (initialState = {}) => {
  const store = makeMockStore(initialState);
  const withHelmet = renderWithHelmet(<Register />);
  const withTheme = renderWithTheme(withHelmet, theme);
  const withRedux = renderWithRedux(withTheme, store);
  const wrapper = mount(<MemoryRouter>{withRedux}</MemoryRouter>);

  return wrapper;
};

describe("Register component", () => {

  

  describe("Rendering test with props", () => {
    let wrapper;
    let mockOnChange;
    beforeEach(() => {
      mockOnChange=jest.fn();
      const initialState = {
        errorReducer: { errors: ["deneme"] },
        authReducer: { loading: false },
      };

      wrapper = setUp(initialState);
   
    
      
    });

  
    it("Testing input events",() => {
      const initialState1 = {
        errorReducer: { errors: ["deneme"] },
        authReducer: { loading: false },
      };
      const store1 = makeMockStore(initialState1);
      const withHelmet1 = renderWithHelmet(<Register />);
      const withTheme1 = renderWithTheme(withHelmet1, theme);
      const withRedux1 = renderWithRedux(withTheme1, store1);
      const props={
          value:'',
          onChange:mockOnChange
        }
      
      const { getByPlaceholderText } = render(<MemoryRouter>{withRedux1}</MemoryRouter>);
      const element = getByPlaceholderText('Username');

fireEvent.change(element, { target: { value: 'desired text' } });

expect(element).toHaveValue('desired text');
      // const props={
      //   value:'',
      //   onChange:mockOnChange
      // }
      // const wrapper1=renderWithTheme(<FormInput {...props}/>,theme);
      // const wrapper2=mount(wrapper1)
      // const input = wrapper2.find("Input");
      // input.props().onChange({target:{value:"username"}})
      // wrapper2.update()
      // console.log(wrapper2.find("Input").props())
      // expect(mockOnChange).toHaveBeenCalledWith({target: {value: "username"}})
     
      //expect(mockOnChange).toHaveBeenCalledTimes(1);
      // wrapper2.update()
      // const refoundComponent = wrapper2.find("Input")
      // console.log(refoundComponent.props())
      
      
     
      // const component = wrapper.find("Input").at(0);
   
      // component.simulate("change");
      // expect(mockOnChange).toHaveBeenCalled()
      // // console.log(component.debug())
      // //  //for selecting one input
      // //  component.simulate("change",{
      // //   target:{value:"username"}
      // //  })
      // //  const refoundComponent = wrapper.find("Input").at(0);
       
      // //  expect(refoundComponent.props().value).toEqual("username")
    })
    it("Should render one form", () => {
      const component = findByTestAtrr(wrapper, "form");

      expect(component.length).toBe(1);
    });
    it("Should render three input",() => {
      const component=findByTestAtrr(wrapper,"form-input")
      
      expect(component.length).toBe(3);
    })
  });

});
