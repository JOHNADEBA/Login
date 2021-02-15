import {useState} from 'react'
import { Link } from "react-router-dom";


const Header = ({onRouteChange})=>{
    const [showMenu, setShowMenu] = useState(false)

    let menus
    // if(showMenu){
    //   menus = <div className='mmenu'>
    //                 <ul className='list  '>
    //                     <li className='mr4 mb5 '> <Link className=' no-underline white ' to = './Countries'>Countries </Link></li>
    //                     <li className='mr4  '> <Link className=' no-underline white ' to = './Robots'  >  Robots </Link> </li>
    //                     <li onClick ={ onRouteChange}
    //                         className='mr4 mt6 no-underline white dim pointer' >Sign Out</li> 
    //                 </ul>

    //                 <div className=' absolute w-100 bottom-0 f4 bg-light-gray pv2 flex justify-around'>
    //                     <i className="dim pointer blue  fab fa-facebook"></i>
    //                     <i className=" red fab fa-instagram-square"></i>
    //                     <i className="blue fab fa-twitter-square"></i>
    //                     <i className="red fab fa-google-plus-square"></i>
    //                 </div>
    //           </div>
    // }
   

    return (
        <header className=''>
            <h1 className='f2 logo'>THE LOGO</h1>
    
            <nav>
                <span className='i'>
                    <i className="f2 fas fa-bars" onClick = {()=> setShowMenu(!showMenu)} ></i>
                </span>

                <ul className='list flex menu'>
                    <li> <Link to = '/Countries'   className='mr4 no-underline white dim pointer'>Countries </Link> </li>
                    <li> <Link to = '/Robots'   className='mr4 no-underline white dim pointer' >Robots </Link> </li>
                    <li  onClick ={  onRouteChange} className='ml5 f6 no-underline white dim pointer' >Sign Out</li>
                </ul>
            
                {menus}
            </nav>
     
        </header>

    )
 
} 


export default Header;
