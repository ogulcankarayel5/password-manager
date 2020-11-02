import React from 'react'
import { Input } from './styles'


export const FormInput = ({name,type,placeholder,value,onChange,onBlur,icon,className,ariaLabel}) => {
 
  return (
      <>
      <Input  className={className} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} aria-label={ariaLabel}/>
      {icon}
      
      </>
  )
}

