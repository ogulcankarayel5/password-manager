import  React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr,checkProps} from '../utils';
import {SocialButtonComponent} from '../components'

describe("SocialButtonComponent",() => {

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
        beforeEach(() => {

            const props = {
                background:"red",
                color:"blue",
                borderColor:"green",
                spanText:"button component",
                onClick:()=>{},
                type:"submit"
            }
            wrapper=shallow(<SocialButtonComponent {...props}/>);
        })

        it("Should render a button",() => {
            const button = findByTestAtrr(wrapper,"buttonComponent");
            expect(button.length).toBe(1)
        })
    })
})