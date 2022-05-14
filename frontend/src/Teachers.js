import { useState } from "react"
import ListPreview from "./ListPreview";



const Teachers = () => {
    const [insDatas] = useState ([
        { 
            id : "Ins-001",
            insName : "Mr. Harshaka Gunarathne",
            insImage : './assets/',
            class : {
                    grade : "8",
                    subject : "Maths",
                    studentCount : "100",
                    day : "Friday",
                    time : "4.00pm - 6.00pm",
                    medium : 'Sinhala',
                }
        },
        { 
            id : "Ins-002",
            insName : "Ms. Randuni Rodrigo",
            class : {
                grade : "8",
                subject : "English",
                studentCount : "50",
                day : "Wednesday",
                time : "4.00pm - 6.00pm",
                medium : 'English',
                
            }
        },
        { 
            id : "Ins-003",
            insName : "Mr. Sandun Nishantha",
            class : {
                grade : "7",
                subject : "Maths",
                studentCount : "100",
                day : "Saturday",
                time : "4.00pm - 6.00pm",
                medium : 'Sinhala',
                
            }
        },
        { 
            id : "Ins-004",
            insName : "Mr. Sandun Nishantha",
            class : {
                grade : "7",
                subject : "Maths",
                studentCount : "100",
                day : "Saturday",
                time : "4.00pm - 6.00pm",
                medium : 'Sinhala',
            
            }
        },
        { 
            id : "Ins-005",
            insName : "Mr. Sandun Nishantha",
            class : {
                grade : "7",
                subject : "Maths",
                studentCount : "100",
                day : "Saturday",
                time : "4.00pm - 6.00pm",
                medium : 'Sinhala',
            }
        }
        
    ]);

    return (  
       <ListPreview insDatas={insDatas}></ListPreview> 
    );
}
 
export default Teachers;