import logo from './logo.svg';
import './App.css';
import {Login} from "./Components/Login";
import {Register} from "./Components/Register";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ReportWebVitals from "./reportWebVitals";
import {Navbar} from "./Components/Navbar";
import {Search} from "./Components/Search";

const App = () => {
  return (
      <div>
          <Navbar/><br/>
          <Router>
            <Routes>
                <Route path = "/" />
                <Route path = "/login" element={<Login />}/>
                <Route path = "/register" element={<Register />} />
                <Route path = "/search" element={<Search />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
