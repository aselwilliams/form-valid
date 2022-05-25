import React from 'react';
import './FormInput.css';
import { useState } from 'react';

export const FormInput = (props) => {
    const [focused, setFocused]=useState(false)
    const {label,onChange,errorMessage, id,...inputProps}=props

    const handleFocus=(e)=>{
        setFocused(true)
    }
  return (
    <div className='form-input'>
        <label>{label}: </label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={()=>inputProps.name==='confirmPassword' && setFocused(true)} />
        <span>{errorMessage}</span>
    </div>
  )
}
