import 'bootstrap/dist/css/bootstrap.css';
import './css/registrationform.css';


(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
        form.classList.add('was-validated')
        }, {loginClick})
      })
})()

const loginClick = () => {
    // alert("hi")
  }

const RegistrationForm = () => {
    return ( 
        <div className="content-form">
            <div className="container-xxl">
                <form action="#" onSubmit={loginClick} method="" className="needs-validation" noValidate>
                                                                                                {/* method post */}
                    <div className="row mt-5 mx-2">
                        <p className='text-center display-6 text-success'>Student Details</p>
                        
                        <div className="form-floating mb-3 col-sm-12 col-md-6">
                                                                                                {/*d-md-none */}
                            <input type="text" className="form-control" id="stufname" placeholder="Click here to enter" pattern="[a-zA-Z]{10}" required/>
                            <label htmlFor="floatingInput">First Name</label>
                            <div className="invalid-feedback is-invaild"></div>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 "> 
                                                                                                {/*d-md-none */}
                            <input type="text" className="form-control" id="stulname" placeholder="Click here to enter" pattern='[a-zA-Z]{10}' required/>
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="email" className="form-control " id="stuemail" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">Student Email</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="date" className="form-control" id="stubday" required/>
                            <label htmlFor="floatingInput">Birth Date</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="text" className="form-control" id="stuschool" placeholder=" " required/>
                            <label htmlFor="floatingInput">School</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="number" className="form-control" id="stumobile" placeholder=" " required/>
                            <label htmlFor="floatingInput">Mobile Number</label>
                        </div>
                        
                        
                        <hr className='py-1'></hr>

                        <p className='text-center display-6 text-success'>Gurdian Details</p>

                        <div className="form-floating mb-3 col-sm-12 col-md-6">
                                                                                                {/*d-md-none */}
                            <input type="text" className="form-control" id="gurfname" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">First Name</label>
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 "> 
                                                                                                {/*d-md-none */}
                            <input type="text" className="form-control" id="gurlname" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        {/* <div className="input-group d-none d-md-flex mb-3">
                            <span className="input-group-text">First and last name</span>
                            <input type="text" aria-label="First name" className="form-control" id="fname" placeholder="First Name" required/>
                            <input type="text" aria-label="Last name" className="form-control" id="lname" placeholder="Last Name" required/>
                        </div> */}
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="email" className="form-control" id="guremail" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">Gurdian Email</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="number" className="form-control" id="gutmobile" placeholder=" " required/>
                            <label htmlFor="floatingInput">Mobile Number</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="text" className="form-control" id="stuaddress" placeholder=" " required/>
                            <label htmlFor="floatingInput">Address</label>
                        </div>

                        <div className="col-md-12 submitbtnarea">
                            <button className="btn btn-outline-success btn-customized" type="submit">Submit form</button>
                        </div>
                        <div>
                            <p><br/><br/><br/>df</p>
                        </div>
                    </div>
                </form>
                   
            </div>
        </div>
     );
}
 
export default RegistrationForm;