import { useState } from "react"
 import {robots} from './robots'
 import Robot from './Robot'
 

 const Robotss = ()=>{
    const [query, setQuery] = useState('')

// if (query.length > 0){
//  const allrobots = robots.filter((robot) =>{
//     return robot.name.toLowerCase().match(query.toLowerCase())
// })
// } 
   
const filt = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(query.toLowerCase())
})
    
return(
    
 <div>
    <div>
    <input type='text' value={query} placeholder='Search robots...'
    className='ma4 pa2 br2 ba b--black-10 bg-transparent hover-bg-black hover-white f4'
    onChange = {(e)=>setQuery(e.target.value)}
    />
</div>

{filt.map((robot, id) =>{
    return   <Robot key = {id} {...robot} />
})}
 </div>

)
 }
 export default Robotss
