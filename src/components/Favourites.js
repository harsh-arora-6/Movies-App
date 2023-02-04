import React, { Component } from 'react';
class Favourites extends Component {
    constructor(){
        super();
        this.state = {
            genres:[],
            currGenre:'All Genres',
            movies:[],
            currSearchText:'',
            limit:5,
            currPage:0
        }
    }
    componentDidMount(){
        let genres = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let temp_genres = [];
        let temp_movies = JSON.parse(localStorage.getItem("movies")||"[]");
        for(let movieObj of temp_movies){
            if(!temp_genres.includes(genres[movieObj.genre_ids[0]]))temp_genres.push(genres[movieObj.genre_ids[0]])
        } 
        temp_genres.unshift('All Genres')
        
        this.setState({
            movies:[...temp_movies],
            genres:[...temp_genres]
        })
    }
    handleGenreChange=(genre)=>{
        this.setState({
            currGenre:genre
        })
    }
    sortDsc=(criteria)=>{
        let temp = [...this.state.movies];
        if(criteria === 'Popularity'){
            temp.sort(function(a,b){
                return b.popularity - a.popularity;
            })
        }else{
            temp.sort(function(a,b){
                return b.vote_average - a.vote_average;
            })
        }
        this.setState({
            movies:[...temp]
        })
    }
    sortAsc=(criteria)=>{
        let temp = [...this.state.movies];
        if(criteria === 'Popularity'){
            temp.sort(function(a,b){
                return -(b.popularity - a.popularity);
            })
        }else{
            temp.sort(function(a,b){
                return -(b.vote_average - a.vote_average);
            })
        }
        this.setState({
            movies:[...temp]
        })
    }
    handleDelete=(movieObj)=>{
        let temp = [...this.state.movies];
        temp = temp.filter((m)=>m.id != movieObj.id);
        localStorage.setItem('movies',JSON.stringify(temp));
        this.setState({
            movies:[...temp]
        })
    }
    render() {
        let genres = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let filterArr = [];
        if(this.state.currGenre === 'All Genres'){
            filterArr = this.state.movies;
            if(this.state.currSearchText != '')filterArr = filterArr.filter((movie)=>movie.title.toLowerCase().includes(this.state.currSearchText.toLowerCase()));
        }else{
            filterArr = this.state.movies.filter((movieObj)=>this.state.currGenre === genres[movieObj.genre_ids[0]]);
            if(this.state.currSearchText != '')filterArr = filterArr.filter((movie)=>movie.title.toLowerCase().includes(this.state.currSearchText.toLowerCase()));
        }
        let moviesCount = filterArr.length;
        let limit = Number(this.state.limit);
        // pagination
        let pages = Math.ceil(moviesCount/limit);
        let pageArr = [];
        for(let i = 1;i <= pages;i++)pageArr.push(i); 
        // select elements to be displayed on a particular page.
        let startIdx = this.state.currPage*limit;
        let endIdx = Math.min(startIdx + limit,moviesCount);
        filterArr = filterArr.slice(startIdx,endIdx);
        return (
            <div className='row' style={{padding:'2rem',gap:'5rem'}}>
                <div className='col-3'>
                    <ul class="list-group" style={{width:'15rem',textAlign:'center'}}>
                        
                        {
                            this.state.genres.map((genre)=>(
                                this.state.currGenre === genre
                                ?
                                <li class="list-group-item" style={{backgroundColor:'#3f51b5',color:'white',fontWeight:'bold',cursor:'pointer'}}>{genre}</li>
                                :
                                <li class="list-group-item" style={{backgroundColor:'white',color:'#3f51b5',cursor:'pointer'}} onClick={()=>this.handleGenreChange(genre)}>{genre}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col'>
                    <div className='row'>
                        <input type='text' className='input-group-text col' placeholder='Search bar' value={this.state.currSearchText} onChange={(e)=>this.setState({currSearchText:e.target.value})}/>
                        <input type='number' className='input-group-text col' placeholder='Rows count' value={this.state.limit} onChange={(e)=>this.setState({limit:e.target.value})}/>
                    </div>
                    <div className='row'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Movie Name</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col"><i class="fa-solid fa-caret-up" onClick={()=>this.sortDsc('Popularity')}></i>Popularity<i class="fa-solid fa-caret-down" onClick={()=>this.sortAsc('Popularity')}></i></th>
                                    <th scope="col"><i class="fa-solid fa-caret-up" onClick={()=>this.sortDsc('Rating')}></i>Rating<i class="fa-solid fa-caret-down" onClick={()=>this.sortAsc('Rating')}></i></th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterArr.map((moviesObj,index)=>(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td style={{display:'flex'}}><img src={`https://image.tmdb.org/t/p/original${moviesObj.poster_path}`} loading='lazy' style={{height:'4rem',width:'5rem',marginRight:'0.5rem'}}/>{moviesObj.title}</td>
                                        <td>{genres[moviesObj.genre_ids[0]]}</td>
                                        <td>{moviesObj.popularity}</td>
                                        <td>{moviesObj.vote_average}</td>
                                        <td><button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(moviesObj)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav aria-label="..." style={{cursor:'pointer'}}>
                            <ul class="pagination">
                                {
                                    pageArr.map((page)=>(
                                        <li class={`page-item ${this.state.currPage + 1 === page ? 'active':''}`}><a class="page-link" onClick={()=>this.setState({currPage:page-1})}>{page}</a></li>
                                    ))
                                }    
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favourites;
