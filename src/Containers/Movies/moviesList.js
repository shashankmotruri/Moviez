import React from 'react';
const MoviesList = (props) =>{

    return (
        <div className="movies-list-container">
            {props.movies.map((movie,index) => 
              <div className='cards__item'>
              <div className='cards__item__link'>
                <figure className='cards__item__pic-wrap' data-category={movie.title}>
                  <img
                    className='cards__item__img'
                    alt=""
                    src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>{movie.original_title}</h5>
                </div>
              </div>
            </div>
            )}
        </div>
    )
}

export default MoviesList;