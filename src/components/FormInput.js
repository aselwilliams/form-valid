import React from 'react';
import './FormInput.css'

export const FormInput = (props) => {
  return (
    <div className='form-input'>
        <label htmlFor="">{props.placeholder}: </label>
        <input type="text" placeholder={props.placeholder} name={props.name}/>
    </div>
  )
}
