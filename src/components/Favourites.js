import React, { Component } from 'react';
import movies from './getMovies';
class Favourites extends Component {
    constructor(){
        super();
        this.state = {
            genres:[],
            currGenre:'All Genres'
        }
    }
    render() {
        let genres = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let temp_genres = [];
        for(let movieObj of movies){
            if(!temp_genres.includes(genres[movieObj.genre_ids[0]]))temp_genres.push(genres[movieObj.genre_ids[0]])
        } 
        temp_genres.unshift('All Genres')
        return (
            <div className='row' style={{padding:'2rem',gap:'5rem'}}>
                <div className='col-3'>
                    <ul class="list-group" style={{width:'15rem',textAlign:'center'}}>
                        
                        {
                            temp_genres.map((genre)=>(
                                this.state.currGenre == genre
                                ?
                                <li class="list-group-item" style={{backgroundColor:'#3f51b5',color:'white',fontWeight:'bold'}}>{genre}</li>
                                :
                                <li class="list-group-item" style={{backgroundColor:'white',color:'#3f51b5'}}>{genre}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col'>
                    <div className='row'>
                        <input type='text' className='input-group-text col' placeholder='Search bar'/>
                        <input type='number' className='input-group-text col' placeholder='Rows count'/>
                    </div>
                    <div className='row'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Movie Name</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((moviesObj,index)=>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td style={{display:'flex'}}><img src={`https://image.tmdb.org/t/p/original${moviesObj.poster_path}`} loading='lazy' style={{height:'4rem',width:'5rem',marginRight:'0.5rem'}}/>{moviesObj.title}</td>
                                        <td>{genres[moviesObj.genre_ids['0']]}</td>
                                        <td>{moviesObj.popularity}</td>
                                        <td>{moviesObj.vote_average}</td>
                                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav aria-label="...">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favourites;
