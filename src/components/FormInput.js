import React from 'react';
import './FormInput.css'

export const FormInput = (props) => {
    const {label,onChange,errorMessage, id,...inputProps}=props
  return (
    <div className='form-input'>
        <label>{label}: </label>
        <input {...inputProps} onChange={onChange}/>
        <span>{errorMessage}</span>
    </div>
  )
}
