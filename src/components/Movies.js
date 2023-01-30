import React, { Component } from 'react';
import movies from './getMovies';

class Movies extends Component {
    constructor(){
        super();
        this.state = {
            hover:'',
            parr:[1]
        }
    }
    render() {
        return (
            <>
            {   movies.length === 0? 
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                :
                <div>
                    <h3 className='text-center'><strong>Trending</strong></h3>
                    <div className='movie-card-wrapper'>
                    {
                        movies.map((moviesObj,index)=>(
                            <div className="card movie-card" key={index} onMouseEnter={()=>this.setState({hover:index})} onMouseLeave={()=>this.setState({hover:''})}>
                                <img src={movies[0].img} className="card-img-top movie-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title movie-title">{movies[0].title}</h5>
                                    {/* <p className ="card-text movie-text">{movies[0].description}</p> */}
                                    { this.state.hover === index && <a href='https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwiQ3dTupuz8AhXA5HMBHW51DnIQPQgJ' className="btn btn-primary movie-btn">Add to Favourites</a>}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <nav aria-label="..." style={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href='#'>Previous</a>
                            </li>
                            {
                                this.state.parr.map((val)=>{
                                    return <li class="page-item active" aria-current="page"><a class="page-link" href="#">{val}</a></li>
                                })
                            }
                            
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                
                }
            </>
        );
    }
}

export default Movies;
