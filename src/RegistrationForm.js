import 'bootstrap/dist/css/bootstrap.css';
import './css/registrationform.css';


(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


const RegistrationForm = () => {
    return ( 
        <div className="content-form bg-light">
            <div className="container-xxl">
                <form action="#"  method="" className="needs-validation" noValidate>
       {/*############################################### method post ###########################################################################*/}
                    <div className="row pt-5 mx-2">
                        <h2 className="col bg-primary rounded-3 d-flex justify-content-center pt-2 sticky-top">
                            <p>Registration</p>
                        </h2>

                        <p className='text-center display-6 text-success'>Student Details</p>
                        
                        <div className="form-floating mb-3 col-sm-12 col-md-6 "> 
                            <input type="text" className="form-control" id="stufname" placeholder=" " pattern='[a-zA-Z]{1,10}' required/>
                            <label htmlFor="floatingInput">- First Name -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 "> 
                            <input type="text" className="form-control" id="stulname" placeholder="Click here to enter" pattern='[a-zA-Z]{1,10}' required/>
                            <label htmlFor="floatingInput">- Last Name -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                <option > </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <label htmlFor="floatingSelect">- Gender -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="email" className="form-control " id="stuemail" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">- Student Email -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="number" className="form-control" id="stumobile" placeholder=" " pattern='[0-9]{10}' />
                            <label htmlFor="floatingInput">- Mobile Number -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="password" className="form-control" id="stupassword1" placeholder=" " required/>
                            <label htmlFor="floatingInput">- Password -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="password" className="form-control" id="stupassword2" placeholder=" " required/>
                            <label htmlFor="floatingInput">- Confirm Password -</label>
                        </div>
                        
                        

                        <hr className='bg-primary'></hr>


                        <p className='text-center display-6 text-success'>Gurdian Details</p>

                        <div className="form-floating mb-3 col-sm-12 col-md-6 "> 
                            <input type="text" className="form-control" id="parfname" placeholder=" " pattern='[a-zA-Z]{1,10}' required/>
                            <label htmlFor="floatingInput">- First Name -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 "> 
                            <input type="text" className="form-control" id="parlname" placeholder="Click here to enter" pattern='[a-zA-Z]{1,10}' required/>
                            <label htmlFor="floatingInput">- Last Name -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="text" className="form-control " id="paraddress" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">- Address -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="email" className="form-control " id="paremail" placeholder="Click here to enter" required/>
                            <label htmlFor="floatingInput">- Parent Email -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="number" className="form-control" id="parmobile" placeholder="  " required/>
                            <label htmlFor="floatingInput">- Mobile Number -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="password" className="form-control" id="parpassword1" placeholder=" " required/>
                            <label htmlFor="floatingInput">- Password -</label>
                        </div>
                        <div className="form-floating mb-3 col-sm-12 col-md-6 ">
                            <input type="password" className="form-control" id="parpassword2" placeholder=" " required/>
                            <label htmlFor="floatingInput">- Confirm Password -</label>
                        </div>

                        <div className="col-md-12 submitbtnarea">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                        <div>
                            <p className='d-flex justify-content-center'><br/><br/><br/>- (c) Akura Institute -</p>

                        </div>
                    </div>
                </form>
                   
            </div>
        </div>
     );
}
 
export default RegistrationForm;