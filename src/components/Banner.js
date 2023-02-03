import React, { Component } from 'react';
import movies from './getMovies';
class Banner extends Component {
   
    render() {
        // let movies = [];
        // console.log(movies.length);
        return (
            <>
                {movies.length === 0? 
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                :
                <div className="card banner-card">
                    <img src={`https://image.tmdb.org/t/p/original${movies[0].poster_path}`} className="card-img-top banner-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title banner-title">{movies[0].title}</h5>
                        <p className ="card-text banner-text">{movies[0].overview}</p>
                        <a href='https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwiQ3dTupuz8AhXA5HMBHW51DnIQPQgJ' className="btn btn-primary banner-btn">Add to Favourites</a>
                    </div>
                </div>
                }
            </>
            
        );
    }
}

export default Banner;
