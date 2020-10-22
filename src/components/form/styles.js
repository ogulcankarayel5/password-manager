import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import {  Text } from "../../shared";
import {defaultFlex} from '../../shared/styles'

const FormSide = styled.div`
  grid-column: 1/2;
  height: 100%;
`;

const FormWrapper = styled.div`
  ${defaultFlex};
  flex-direction: column;
  height: 100%;

  a {
    border-radius: 2px;
    font-size: 2rem;
    font-weight: 600;
  }

  & form {
    /* padding: 4rem; */
    /* -webkit-box-shadow: -3px 3px 25px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 3px 25px -13px rgba(0, 0, 0, 0.75);
  box-shadow: -3px 3px 25px -13px rgba(0, 0, 0, 0.75); */
    width: 60%;

    display: flex;
    flex-direction: column;
  }

  .form-group-start {
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .formCheck {
    display: flex;
    align-items: center;

    flex: 2;
    & p {
      margin-left: 1rem;
    }
  }

  & .form-group {
    display: flex;

    align-items: center;
    position: relative;

    svg {
      position: absolute;
      left: 1rem;
      top: 50%;
      color: #aaa;
      transition: 0.3s;
    }
    .input-error {
      border: 3px solid red;
    }
  }
  & .form-group-error {
    flex-direction: column;
  }
`;

const Button = styled.button`
  ${defaultFlex};
  letter-spacing: 0.1rem;
  font-size: ${(props) => props.fontSize ?? "2rem"};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.background};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.formButtonColor};
  padding: ${(props) => props.padding ?? "2rem"};
  border: 2px solid ${(props) => props.borderColor};
  font-weight: ${(props) => props.fontWeight ?? 500};
  margin-top: 3.5rem;
  cursor: pointer;
  svg {
    margin-right: 2rem;
    width: 3rem;
    height: 3rem;
  }
`;

Button.defaultProps={
  theme:{
    colors:{
      background:"#FFFFFF",
      formButtonColor:"#7041EE"
    }
  }

}
Button.displayName="SocialButton"

const ErrorText = styled(Text)`
  font-size: 1.4rem;
  text-align: start;
  color: red;
`;

//FormInput

const Input = styled.input.attrs((props)=>({
    type:props.type
}))`

border-radius: 4px;
      font-weight: 600;
      letter-spacing: 0.1rem;
      font-family: "Open Sans";
      font-size: 1.5rem;
      height: 6rem;
      
      border: 2px solid #aaa;
      padding: 2rem;
      padding-left: 5rem;
      margin-top: 3.5rem;
      width: 100%;
      transition: 0.3s;
      ::placeholder {
        font-weight: 400;
        opacity: 0.9;
      }
      &:focus{
        
        border-color: ${props=>props.theme.colors.formInputBorderColor};
        box-shadow: 0 0 8px 0  ${props=>props.theme.colors.formInputBorderColor};
      }
     


`
Input.displayName= "Input";
Input.defaultProps={
  theme:{
    colors:{formInputBorderColor:"#FFFFFF"}
  }
}

export { Button, FormWrapper, FormSide, ErrorText,Input };
