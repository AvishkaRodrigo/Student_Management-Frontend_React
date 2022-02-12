import 'bootstrap/dist/css/bootstrap.css';
import './css/navbar.css';
import LogoB from './assets/Logo/Logo-B1.png';
import sun from './assets/Icons/sun.svg';
import moon from './assets/Icons/moon.svg';


const loginClick = () => {
  alert("hi")
}


const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light fixed-bottom">
        <div className="container-fluid">
          {/* <div></div>   */}
          <a className="navbar-brand" href="#" ><img src={LogoB} alt="Logo" className="float-left Logo img-fluid"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-item-teacherList">
                <a className="nav-link m-2" aria-current="page" href="#">Teachers List</a>
              </li>
              <li className="nav-item nav-item-myclassList">
                <a className="nav-link" href="#">My Classes</a>
              </li>
            </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success btn-customized2 btn-search" type="submit">Search</button>
              </form>
            <div className='d-flex m-2'>
              <img src={moon} className="mx-2"></img>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              </div>
              <img src={sun}></img>
            </div>
            <span className="navbar-text">
                {/* <Link to="/">home</Link> */}
                <button type="button" className="btn btn-outline-success btn-customized2 mx-2 btn-login-register" onClick={loginClick}>Login / Signin</button>
            </span>
            
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;