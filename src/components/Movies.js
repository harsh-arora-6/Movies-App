import React, { Component } from 'react';
// import movies from './getMovies';
import axios from 'axios';
class Movies extends Component {
    constructor(){
        super();
        this.state = {
            hover:'',
            parr:[1],
            movies:[],
            currPage:1,
        }
    }
    async componentDidMount(){
        const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0f26e2cb1909ec6606903dd88fbee1c5&page=${this.state.currPage}`);
        const data = resp.data;
        this.setState({
            movies:[...data.results]
        })
    }
    changeMovies = async ()=>{
        const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0f26e2cb1909ec6606903dd88fbee1c5&page=${this.state.currPage}`);
        const data = resp.data;
        this.setState({
            movies:[...data.results]
        })
    }
    handleLeft = ()=>{
        if(this.state.currPage != 1){
            
        }
    }
    handleRight=()=>{
        let tmp_parr = [];
        let cPage = this.state.currPage;
        for(let i = 1;i <= cPage+1;i++){
            tmp_parr.push(i);
        }
        // this works asychronously thats why we passed changeMovies as second argument 
        this.setState({
            parr:[...tmp_parr],
            currPage:cPage+1,
        },this.changeMovies)
    }
    render() {
        return (
            <>
            {   this.state.movies.length === 0? 
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                :
                <div>
                    <h3 className='text-center'><strong>Trending</strong></h3>
                    <div className='movie-card-wrapper'>
                    {
                        this.state.movies.map((moviesObj,index)=>(
                            <div className="card movie-card" key={index} onMouseEnter={()=>this.setState({hover:index})} onMouseLeave={()=>this.setState({hover:''})}>
                                <img src={`https://image.tmdb.org/t/p/original${moviesObj.poster_path}`} className="card-img-top movie-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title movie-title">{moviesObj.title}</h5>
                                    {/* <p className ="card-text movie-text">{movies[0].description}</p> */}
                                    { this.state.hover === index && <a href='http://localhost:3000/#' className="btn btn-primary movie-btn">Add to Favourites</a>}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <nav aria-label="..." style={{display:'flex',justifyContent:'center',marginTop:'1rem'}}>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" onClick={()=>this.handleLeft()}>Previous</a>
                            </li>
                            {
                                this.state.parr.map((val,index)=>{
                                    return <li key={index} className="page-item active" aria-current="page"><a href='http://localhost:3000/#' className="page-link">{val}</a></li>
                                })
                            }
                            
                            <li className="page-item">
                                <a className="page-link" onClick={()=>this.handleRight()}>Next</a>
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
