import './App.css';
import AdminNavbar from './AdminNavbar';
import InsNavbar from './InsNavbar';
import Teachers from './Teachers';
import StudentNavbar from './StudentNavbar';
import ParentNavbar from './ParentNavbar';
import StaffNavbar from './StaffNavbar';

import {BrowserRouter as Routes, Route, Switch} from 'react-router-dom'
import Login from './Login';
import RegistrationForm from './RegistrationForm';

let userType;
let userType_NavBar;

userType = 'Student';

  if(userType === 'Instructor'){
    userType_NavBar = <InsNavbar/>
  }else if(userType === 'Admin'){
    userType_NavBar = <AdminNavbar/>
  }else if(userType === 'Staff'){
    userType_NavBar = <StaffNavbar/>
  }else if(userType === 'Parent'){
    userType_NavBar = <ParentNavbar/>
  }else if(userType === 'Student'){
    userType_NavBar = <StudentNavbar/>
  }


function App() {

  return (
    <div className="">
      {userType_NavBar}
      <div className="Main-content">
        <Routes>
          <Switch>
          <Route exact path="/">
              {/* <Teachers/> */}
              {/* <Login/> */}
              <RegistrationForm/>
          </Route>
          <Route path="/navbar">
              {/* <AdminNavbar/> */}
          </Route>
          </Switch>
        </Routes>
      </div>
      
    </div>
     
  );
}

export default App;
