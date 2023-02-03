import React, { Component } from 'react';
// import movies from './getMovies';
import axios from 'axios';
import movies from './getMovies';
class Movies extends Component {
    constructor(){
        super();
        this.state = {
            hover:'',
            parr:[1],
            movies:[],
            currPage:1,
            isLoading:false,
            favourites:[],
        }
    }
    // this works after dom is loaded 
    async componentDidMount(){
        this.setState({
            isLoading:true
        })
        const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0f26e2cb1909ec6606903dd88fbee1c5&page=${this.state.currPage}`);
        const data = resp.data;
        // pass the array in double quotes otherwise unexpected results
        let temp_movies = JSON.parse(localStorage.getItem("movies")||"[]");
        let temp_ids = temp_movies.map((movie)=>movie.id);
        this.setState({
            movies:[...this.state.movies,[...data.results]],
            isLoading:false,
            favourites:[...temp_ids]
        })
    }
    changeMovies = async ()=>{
        this.setState({
            isLoading:true
        })
        const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0f26e2cb1909ec6606903dd88fbee1c5&page=${this.state.currPage+1}`);
        const data = resp.data;
        this.setState({
            movies:[...this.state.movies,[...data.results]]
        })
        
        // console.log('hello');
    }
    handleLeft = ()=>{
        if(this.state.currPage != 1){
            this.setState({
                isLoading:true
            })
            this.setState({
                currPage:this.state.currPage - 1,
                isLoading:false
            })
        }
    }
    handleRight=async()=>{
        if(this.state.currPage === this.state.movies.length){
            let tmp_parr = [];
            let cPage = this.state.currPage;
            for(let i = 1;i <= cPage+1;i++){
                tmp_parr.push(i);
            }
            // this works asychronously so we can pass changeMovies as second argument setState ( that was the case when currPage was not used in render function in map)

            // here we are updating the movies first after this rendering will take place corresponding to previous currPage
            await this.changeMovies();
            this.setState({
                parr:[...tmp_parr],
                currPage:cPage+1,
                isLoading:false
            })
            //after this currPage will be updated and new list of movies will be shown
        }else{
            this.setState({
                isLoading:true
            })
            this.setState({
                currPage:this.state.currPage + 1,
                isLoading:false
            })
        }
        
    }
    handleClick=(val)=>{
        this.setState({
            isLoading:true
        })
        this.setState({
            currPage:val,
            isLoading:false
        })
    }
    handleFavourites=(movieObj)=>{

        let old_favourites = JSON.parse(localStorage.getItem("movies")||"[]");
        // includes doesn't work if you search objects
        if(this.state.favourites.includes(movieObj.id)){
            old_favourites = old_favourites.filter((favourite) => favourite.id != movieObj.id);
        }else{
            old_favourites.push(movieObj);
        }
        // console.log(new_favourites);
        localStorage.setItem('movies',JSON.stringify(old_favourites));
        this.handleFavouritesState();
    }
    handleFavouritesState = ()=>{
        let old_favourites = JSON.parse(localStorage.getItem("movies")||"[]");
        let temp_favourite_id = old_favourites.map((favourite)=>favourite.id);
        this.setState({
            favourites:[...temp_favourite_id]
        })
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
                    <h3 className='text-center' style={{height:'5rem',display:'flex',alignItems:'center',justifyContent:'center'}}><strong>Trending</strong></h3>
                    <div className='movie-card-wrapper'>
                    {/* {console.log(this.state.movies,this.state.currPage)} */}
                    {
                        
                        this.state.movies[this.state.currPage - 1].map((moviesObj,index)=>(
                            this.state.isLoading ?
                            <div className="card movie-card" key={index}>
                                <div className="spinner-border text-primary movie-img-loader" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <div className="card movie-card" key={index} onMouseEnter={()=>this.setState({hover:index})} onMouseLeave={()=>this.setState({hover:''})}>
                                <img src={`https://image.tmdb.org/t/p/original${moviesObj.poster_path}`} loading='lazy' className="card-img-top movie-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title movie-title">{moviesObj.title}</h5>
                                    { this.state.hover === index && <a className="btn btn-primary movie-btn" onClick={()=>this.handleFavourites(moviesObj)}>{!this.state.favourites.includes(moviesObj.id)?'Add to Favourites':'Remove from Favourites'}</a>}
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <nav aria-label="..." style={{display:'flex',justifyContent:'center',marginTop:'1rem',cursor:'pointer'}}>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" onClick={()=>this.handleLeft()}>Previous</a>
                            </li>
                            {
                                this.state.parr.map((val,index)=>{
                                    return <li key={index} className={`page-item ${this.state.currPage === val?'active':''}`} aria-current="page"><a className="page-link" onClick={()=>this.handleClick(val)}>{val}</a></li>
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
