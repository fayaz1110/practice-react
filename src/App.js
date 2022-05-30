import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <nav>
              <ul>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/read">Read</Link>
                </li>
              </ul>
              </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main">
          React Crud Operations
          <br></br>
          <div>
        
             
              <Routes>
                <Route path='/create' element={<Create />}  />
                <Route path='/read/*' element={<Read/>} />
                <Route path='/update' element={<Update/>} />
              </Routes>
          </div>
        </div>
            </Router>
      </header>
    </div>
  );
}


export default App;
