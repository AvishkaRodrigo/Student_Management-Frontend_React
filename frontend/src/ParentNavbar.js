import 'bootstrap/dist/css/bootstrap.css';
import './css/navbar.css';
import {Avatar, Tooltip} from '@material-ui/core';

import { Icon } from '@iconify/react';
import LogoB from './assets/Logo/Logo-B1.png';
import avatar from './assets/Avatars/Parent.png';


const ParentNavbar = () => {

  function showPassword() {

      var x = document.getElementById("password1");
    if (x.type === "password") {
      x.type = "text";
      // document.getElementById
    } else {
      x.type = "password";
    }

      var y = document.getElementById("password2");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }

  }

    return ( 
      <div>

        {/* Model 1 */}
        
        <div className="modal fade" id="Modal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{color : '#008272' }}>
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content bg-light">
              <div className="modal-header border-primary border-3">
                <h5 className="modal-title text-dark" id="exampleModalLabel">Edit Profile</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='needs-validation' noValidate>
                  <div className="input-group mb-3 ">
                    <span className="input-group-text bg-primary" id="basic-addon1 fname">First Name</span>
                    <input type="text" className="form-control" placeholder="Enter your first name" aria-label="Username" aria-describedby="basic-addon1" required/>
                  </div> 
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary" id="basic-addon1lname">Last Name</span>
                    <input type="text" className="form-control" placeholder="Enter your last name" aria-label="Username" aria-describedby="basic-addon1" /*value={"lname"}*/ required/>
                  </div> 
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary" id="basic-addon1">Mobile No</span>
                    <input type="number" className="form-control" placeholder="Enter your conact number" aria-label="Username" aria-describedby="basic-addon1" /*value={"mobileNo"}*/ required/>
                  </div> 
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-primary" id="basic-addon1">Email Address</span>
                    <input type="number" className="form-control" placeholder="Enter your Email" aria-label="Username" aria-describedby="basic-addon1" /*value={"mobileNo"}*/ required/>
                  </div>   
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-sm btn-danger" data-bs-target="#Modal2" data-bs-toggle="modal">Change Password</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                {/* ###################################################################################################Action needed############################################################################## */}
                <button type="submit" className="btn btn-sm btn-primary">Save Changes</button>
                <button type="button" className="btn btn-danger btn-sm btn-secondary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        {/* Model 2 - Change Password */}
        <div className="modal fade" id="Modal2" tabIndex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true" style={{color : '#008272' }}>
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content bg-light">
              <div className="modal-header border-primary border-3">
                <h5 className="modal-title text-dark" id="exampleModalLabel">Edit Profile</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='needs-validation' noValidate>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-primary" id="basic-addon1 myInput">Password</span>
                    <input type="password" id='password1' className="form-control" placeholder="Enter your password" aria-label="Username" aria-describedby="basic-addon1" /*value={"fname"}*/  />
                    <button className="btn btn-secondary " type="button" id="button-addon2 btn-password1" onClick={() => showPassword(1)}><Icon icon="ant-design:eye-filled" color="#e5e5e5" width="25" height="25" inline={true} /></button>
                  </div> 
                  <div className="input-group mb-3 ">
                    <span className="input-group-text bg-primary" id="basic-addon1 ">Password</span>
                    <input type="password" id='password2' className="form-control" placeholder="Confirm your password" aria-label="Username" aria-describedby="basic-addon1" /*value={"fname"}*/ />
                    <button className="btn btn-secondary" type="button" id="button-addon2 btn-password2" onClick={() => showPassword(2)}><Icon icon="ant-design:eye-filled" color="#e5e5e5" width="25" height="25" inline={true} /></button>
                  </div>
                {/* ###################################################################################################Action needed############################################################################## */}
                  <div className='d-flex justify-content-center'>
                    <button className="btn btn-primary btn-sm"  onClick={()=> {alert('Requested OTP has been sent to your Email')}}>Request OTP</button>
                  </div>    
                  <hr></hr>
                  <div className="input-group mb-3 ">
                    <span className="input-group-text bg-primary" id="basic-addon1 ">OTP</span>
                    <input type="password" id='password2' className="form-control" placeholder="Enter OTP received to your email here" aria-label="Username" aria-describedby="basic-addon1" /*value={"fname"}*/ />
                    <button className="btn btn-secondary " type="button" id="button-addon2 btn-password2" onClick={() => showPassword(2)}><Icon icon="ant-design:eye-filled" color="#e5e5e5" width="25" height="25" inline={true} /></button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                {/* ###################################################################################################Action needed############################################################################## */}
                <button className="btn btn-sm btn-primary" type='submit'>Save Password</button>
                <button className="btn btn-sm btn-danger" data-bs-target="#Modal1" data-bs-toggle="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>


      
      <nav className="navbar navbar-expand-md navbar-light fixed-bottom">
      <div className="container-fluid">
        
        <Tooltip title="About Akura Institute" placement="top" arrow>
          <a className="navbar-brand" href="#"><img src={LogoB} alt="Logo" className="float-left Logo img-fluid"></img></a>
        </Tooltip>
        
        <div className="col-2 d-flex">
          <div className="navbar-dp pt-2">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#Modal1" data-bs-whatever="@getbootstrap">
              <Avatar alt="Remy Sharp" src={avatar} className=""/>
            </button>
          </div>
          <div className="navbar-dp-name">
            <p className="pt-3 ms-md-2 ms-lg-3 d-none d-md-block fs-5">Parent</p>
          </div>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-md-3 ps-md-3 ms-lg-5 ps-lg-5 col-8" id="navbarSupportedContent">
          <div className="navbar-nav me-auto col">
            <div className="nav-item ms-4 me-4 col">
              <a className="nav-link" href="#"><button className="btn nav-item fs-5"><Icon icon="ant-design:home-outlined" color="black" width="25" height="25" className='me-2'/>Home</button></a>
            </div>
            <div className="nav-item ms-4 me-4 col ">
              <a className="nav-link" href="#"><button className="btn nav-item fs-5"><Icon icon="clarity:notification-line" color="black" width="25" height="25" className="me-2"/>Notification</button></a>
            </div>
          </div>
            <a className="nav-link" href="#"><button className="btn nav-item fs-5"><Icon icon="eva:power-outline" color="black" width="25" height="25" className="me-2"/>Logout</button></a>
          
        </div>
      </div>
    </nav>
      </div>
    );
}
 
export default ParentNavbar;