import React,{ useState,useEffect} from 'react'
import MoviesList from './moviesList'
import SearchBox from '../Search/search'
import './movies.css'
const MoviesComponent = () =>{
    const [movies,setmovies] = useState([]);
    const [searchValue,setsearchValue] = useState('');
    const [CurrentPage, setCurrentPage] = useState(0)
    const [Loading, setLoading] = useState(true)

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a0869ce0e2544875502b28cf700a693b&query=${searchValue}`

        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.results) {
        setmovies(responseJson.results);
        }
    } 
    useEffect(() => {
        getMovieRequest();
    },[searchValue]);
 
    const fetchMovies = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
            
                setmovies([...movies, ...result.results])
                setCurrentPage(result.page)
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }
    const loadMoreItems = () => {
        let endpoint = '';
        setLoading(true)
        console.log('CurrentPage', CurrentPage)
        endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=a0869ce0e2544875502b28cf700a693b&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);

    }
    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=a0869ce0e2544875502b28cf700a693b&language=en-US&page=1`;
        fetchMovies(endpoint)
    }, [])
  

    return (
        <div>
              <div className="cards">
                     <h1>Checkout the Epic Movies</h1>
                     <div className="align-items-center mt-4 mb-4">
                    <SearchBox searchValue={searchValue} setsearchValue={setsearchValue}/>
                    </div>
                     <div className="cards__container">
                         <div className="cards__wrapper">
                             <div className="cards__items">
                                 <MoviesList movies={movies} />
                                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div>
                             </div>
                         </div>
                     </div>
                 </div>
                
        </div>
    )
}

export default MoviesComponent;