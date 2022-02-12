import './App.css';
import Navbar from './Navbar';
import Teachers from './Teachers';
import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
import Login from './Login';
import RegistrationForm from './RegistrationForm';


function App() {
  return (
    <div className="">
    <Navbar className="Navbar"/>
      <div className="Main-content">
        <Routes>
          <Switch>
          <Route exact path="/">
              {/* <Teachers/> */}
              {/* <Login/> */}
              <RegistrationForm/>
          </Route>
          <Route path="/navbar">
              <Navbar/>
          </Route>
          </Switch>
        </Routes>
      </div>
      
    </div>
     
  );
}

export default App;
