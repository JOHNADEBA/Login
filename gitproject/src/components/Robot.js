const Robot = ({name, email, id})=>{
    return(
        <div className = 'bg-light-blue tc br3 dib ma3 grow shadow-5 '>
            <img  className = '' src={`https://robohash.org/${id}?size=200x200`} alt='' />
            <h2>{name}</h2>
            <p>{email}</p>
  
        </div>
    )
} 
export default Robot
 
