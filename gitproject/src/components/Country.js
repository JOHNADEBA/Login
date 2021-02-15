const Country = ({flag, name, population, region, timezones, nativeName})=>{
   
    return(
    <div  className = ' tc br3 dib ma3 grow shadow-5 '>

            <img  className = '' src={flag} alt='{name}' height= "100px" 
        width= "200px"  />
            <h2> {name}</h2>
            <p><b className='red'>Population:</b> {population}</p>
            <p><b className='green'>Region: </b>{region}</p>
            <p><b>Timezones: </b>{timezones[0]}</p>
            <p><b className='blue'>NativeName:</b> {nativeName}</p>
  
        </div>
    )
} 
export default Country
