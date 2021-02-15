import { useState } from "react"
import axios from 'axios'

const SignIn = ({onRouteChange, onRouteeChange})=>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')

  const btnSubmit = (e) =>{
    e.preventDefault()

    const data = {
      email,
      password
    }

    if(!email || !password)  setAlert('Enter valid Credentials')     
  
    axios.post('http://localhost:9000/signin', data)
    .then(res =>{
      if(res.status !== 200){
        console.log(res.data);
        setAlert('Email/Password do not match')
      }
      else{
        onRouteChange('home')
        
      }
    })
   
  }
  
  
return(
<div>
  <header className=''>
  <h1 className=' f2'>THE LOGO</h1>
  </header>
<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">

<form className="measure  pa3">

    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>

      <p className="red">{alert}</p>
      
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
        <input onChange = {(e)=>setEmail(e.target.value)}
        className=" br2 pa2 input-reset ba b--black-10 bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
        <input onChange = {(e)=>setPassword(e.target.value)}
        className="b br2 pa2 input-reset ba b--black-10 bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
     </fieldset>

    <div className="">
      <input onClick = {btnSubmit}
      className="b br2 ph3 pv2 input-reset ba b--black-10 bg-transparent grow pointer f6 dib" type="submit" value="Sign in" /> 
    </div>
    <div className="lh-copy mt3">
      <a  onClick= {onRouteeChange}
       href="#0" className="f6 link dim black db hover-green">Sign up</a>
     </div>

  </form>
</article>
   </div> 

   
)
}
export default SignIn

