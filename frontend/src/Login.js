import 'bootstrap/dist/css/bootstrap.css';
import './css/login.css';

const Login = () => {
    return ( 
        <div className="content-login p-5">
            {/* <div className="container-xxl">
                <div className="row"> */}
                    <button className="btn btn-outline-success btn-lg m-5 btn-customized3">Student / Parent</button>
                    <button className="btn btn-outline-success btn-lg m-5 btn-customized3">Teacher</button>
                    <button className="btn btn-outline-success btn-lg m-5 btn-customized3">Staff</button>
                {/* </div>
            </div> */}
        </div>
     );
}
 
export default Login;