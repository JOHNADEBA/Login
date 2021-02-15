import {useEffect, useState} from 'react'
// import Movie from './Movie'

const Movies = () =>{
const [movies, setMovies] = useState([])

useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=bf5dd946')
    .then(response => response.json())
    .then(data =>  setMovies(data))
    
    
}, [])

    

    // const allMovies =  movies.map((movie, id ) =>{
    //     return <Movie key={id}  {...movie} />
    // })

    return(
        <div>    
       
{movies.name}
        </div>
    )

}
export default Movies