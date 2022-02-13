// import teacher1 from './assets/Teacher/Ins-001.jpg';
// import teacher2 from './assets/Teacher/Ins-002.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './css/dashboard.css';

function setImage () {

};

const ListPreview = (props) => {
  const insDatas = props.insDatas;
  const id1 = insDatas[0].id
  console.log(id1);
  
  
  return (    
    <div className="content-dashboard">
      <div className='container-xxl'>
        <div className='row'>
          <div className="row">
          {insDatas.map((insData)=>(
            
            <div className='col-xs-4 col-md-6 col-xl-4 my-4' key={insData.id}>
              <div>
                <div className="cards m-auto">
                  
                  <div className="card-image">
                  {/* style={{background: 'url("./assets/Teacher/Ins-002.jpg")', backgroundRepeat : 'no-repeat' , backgroundSize : 'cover', backgroundPosition : 'center'}}  */}
                  {/* <div className="card-image"  style={{background: this.state.image}} > */}
                  {/* <img src={require({setImage(insData.id)} alt="dsf" className="card-image"/> */}
                  </div>
                  
                  {/* Class Description */}
                  <div className="card-text">
                    <div className="instructor display mb-4">{insData.insName}</div>
                    <div className="subject">{insData.class.subject}</div>
                    <div className="grade">Grade - {insData.class.grade}</div>
                    <div className="medium">{insData.class.medium} Medium</div>
                    <div className="enrolarea">
                      <button type="button" className="btn btn-outline-success btn-customized mt-2">Enroll</button>
                    </div>
                  </div>

                  {/* Class Stats */}
                  <div className="card-stats card-stats">
                    <div className="stats">
                      <div className="value">{insData.class.studentCount}</div>
                      <div className="type">students</div>
                    </div>
                    <div className="stats border1">
                      <div className="value">{insData.class.day}</div>
                      <div className="type">{insData.class.time}</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          ))}
            <div>
            <br/><br/>
            </div>
          </div>
        </div>  
      </div> 
    </div>   
   );
}
 
export default ListPreview;