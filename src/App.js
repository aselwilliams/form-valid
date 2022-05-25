import { useState, useEffect, useRef } from "react";
import "./App.css";
import { FormInput } from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage:'It should be a valid email address!',
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "DOB",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "DOB",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Passwords don't match!",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input)=>(
            <FormInput key={input.id} {...input} values={values[input.name]} onChange={onChange}/>

          ))
        }

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
// const usernameRef=useRef()

// const handleSubmit=(e)=>{
//   e.preventDefault();
//  const data=new FormData(e.target)
//  console.log(Object.fromEntries(data))
// }
