import {useState,useEffect,useRef} from 'react'
import './App.css';
import { FormInput } from './components/FormInput';

function App() {
  const [username, setUsername] = useState('')
  
 const inputs=[
   {
     id:1,
     name:'username',
     type:'text',
     placeholder:'Username',
     label:'Username'

   },
   {
    id:2,
    name:'email',
    type:'text',
    placeholder:'Email',
    label:'Email'

  },
  {
    id:3,
    name:'birthday',
    type:'text',
    placeholder:'DOB',
    label:'DOB'

  },
  {
    id:4,
    name:'password',
    type:'password',
    placeholder:'Password',
    label:'Password'

  },
  {
    id:5,
    name:'confirm password',
    type:'password',
    placeholder:'Confirm Password',
    label:'Confirm Password'

  },
 ]
  
  const handleSubmit=(e)=>{
    e.preventDefault();

  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name='username' placeholder='Username' />
     
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