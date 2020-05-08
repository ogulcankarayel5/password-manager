import React from 'react'
import styled from 'styled-components';

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


export const FormInput = React.memo(({name,type,placeholder,value,onChange,onBlur,icon,className}) => {
  console.log("render forminput")
  return (
      <>
      <Input className={className} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
      {icon}
      
      </>
  )
})

