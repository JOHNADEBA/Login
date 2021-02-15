import {useEffect, useState} from 'react'
import Country from './Country'
// import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

// import { useParams } from 'react-router-dom'

const Countries = ()=>{
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    
    const allCountry = countries.filter((country) =>{
        return country.name.toLowerCase().includes(query.toLowerCase())
      })

useEffect(() => {
    setLoading(true)
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then (data => {         
        setCountries(data) 
        setLoading(false)       
    })
    .catch(err =>{
        console.log(err)
    })
   
}, [])

if(loading){
    return(
        <div>
            <i className=" tc mt6 f1 fas fa-spinner fa-pulse"></i>
            <p>Please wait a moment...</p>
        </div>
    )
}
 return(
    <div className='flex flex-column'>
        
        <div >
            <input type='text' value={query} placeholder='Search robots...'
            className='ma4 pa2 br2 b0 f4 b--black-10 hover-bg-black hover-white'
            onChange = {(e)=>setQuery(e.target.value)}
        />
        </div>
        
        <div className=''>
            {allCountry.map((country, id) =>{
             return   <Country key = {id} {...country} />
                })}
        
        </div>
        
    </div>

        
 )

   
//    if(countries){
//        content = (
// {countries.map((country, id) =>{
// <
//     Photo key = {id} {...country}   
// />
// })}

//            <div style = {{backgroundImage: "url('{photo.url}')",  backgroundSize: 'cover',
//            backgroundRepeat: 'no-repeat', height: "200px", width: "200px" }}>
//                <h2> {countries[0].name} </h2>

//                {/* <img src={photo.url} alt={photo.title}/> */}

//            </div>
//        )
//    }

//    return(
//        <div>          
     
//       {/* <input type='text' value={query} placeholder='Search robots'
//     className='ma4 pa2 br2 b0 f3'
//     onChange = {(e)=>setQuery(e.target.value)}
//     /> */}

           
// {content}
//        </div>
//    )
}
export default Countries
