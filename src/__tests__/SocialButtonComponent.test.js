import  React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr,checkProps} from '../utils';
import {SocialButtonComponent} from '../components'
import renderer from "react-test-renderer";

const setUp = (
    props={}
  ) => {
    const component = shallow(<SocialButtonComponent {...props}>Click here</SocialButtonComponent>);
    return component;
  }; 

describe("SocialButtonComponent",() => {

    describe("Snapshot for SocialButtonComponent",() => {
        const tree = renderer.create(<SocialButtonComponent/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    describe("Checking PropTypes",() => {
        it("Should not throw a warning",() => {

            const expectedProps = {
                background:"red",
                color:"blue",
                borderColor:"green",
                spanText:"button component",
                onClick:()=>{},
                type:"submit"
            }
            const propsError = checkProps(SocialButtonComponent,expectedProps)
            expect(propsError).toBeUndefined();


        })
    })

    describe("Renders",() => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                background:"red",
                color:"blue",
                borderColor:"green",
                spanText:"button component",
                onClick:mockFunc,
                type:"submit"
            }
            wrapper=setUp(props)
        })

        it("Should render a button with that given props",() => {

            const button = findByTestAtrr(wrapper,"buttonComponent");
            
            expect(button.length).toBe(1)
            expect(button.prop('type')).toEqual("submit");
            expect(button.prop("backgroundColor")).toEqual("red");
            expect(button.prop("color")).toEqual("blue")
            expect(button.prop("borderColor")).toEqual("green")
            //spanText
            expect(button.text()).toEqual("button component")
            
            

        })
        it("Should onClick callback on click event",() =>{
            const buttonComponent = findByTestAtrr(wrapper,"buttonComponent");
            buttonComponent.simulate('click')
            expect(mockFunc).toHaveBeenCalled();
        }) 
    })
})