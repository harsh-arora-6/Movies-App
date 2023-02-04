import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Favourites from './components/Favourites';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={[<Banner/>,<Movies />]}/>
        <Route exact path='/favourites' element={<Favourites />} />
      </Routes>
    </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' element={[<Banner />,<Movies />]}/>
//         <Route exact path='/favourites' element={<Favourites />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
