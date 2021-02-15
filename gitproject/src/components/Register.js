import {useState} from 'react'
import axios from 'axios'

const Register = ({onRouteChange, loadUser})=>{

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')


  const btnSubmit = (e) =>{
    e.preventDefault()
    
    const newUser = {
      name,
      email,
      password
    }
    if(name && email && password){
    axios.post('http://localhost:9000/register', newUser )
    .then(res => {      
      console.log(res.data)
      onRouteChange('signin')}
    ).catch(error => console.log(error))
    }else{
      setAlert('Enter all fields')
    }
  
  }

 
  return(
      <div>
          <header className=''>
            <h1 className=' f2'>THE LOGO</h1>
          </header> 

          <article className="br2 ba dark-gray b--black-10 mv2 w-100 w-50-m w-25-l mw5 center shadow-5">  

            <form className="measure  pa3">

              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign Up</legend>

                <p className="red">{alert}</p>
                {/* <ul>
                
                
                if( typeof errors != 'undefined') {
                      errors.forEach(error => {
                      <li> {error.message }</li>
                      })
                  }
                    
                        
                      
                </ul> */}
                
                <div className="mt3">
                  <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                  <input onChange = {(e) =>setName(e.target.value)} 
                  className= ' br2 pa2 input-reset ba b--black-10 bg-transparent hover-bg-black hover-white w-100' type="text" name="name"  id="name" />
                </div>

              
                <div className="mv3">
                  <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                  <input onChange={(e)=>setEmail(e.target.value)}
                  className=" br2 pa2 input-reset ba b--black-10 bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                  <input onChange={(e)=>setPassword(e.target.value)}
                  className="b br2 pa2 input-reset ba b--black-10 bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>

              </fieldset>

              <div className="">
                <input 
                onClick = {btnSubmit}
                className="b br2 ph3 pv2 input-reset ba b--black-10 bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" /> 
              </div>
              <div onClick = {() => onRouteChange('signin')} 
                  className="lh-copy mt3">
                <a href="#0" className="f6 link dim black db hover-green">Sign In</a>                  
              </div>

            </form>
          </article>
      </div>
    )
}
export default Register