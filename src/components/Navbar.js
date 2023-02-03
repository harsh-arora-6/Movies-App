import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'1rem'}}>
                {/* Link is better than a since it doesn't refresh the page ,hence states aren't lost */}
                <Link to='/' style={{textDecoration:'none'}}><h1 >Movies</h1></Link>
                <Link to='/favourites' style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'0.5rem'}}>Favourites</h2></Link>
            </div>
        );
    }
}

export default Navbar;
