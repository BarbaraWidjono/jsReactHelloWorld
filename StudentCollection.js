import React from 'react';
import Student from './Student';
import './StudentCollection.css';

class StudentCollection extends React.Component{
  constructor(props){
    super(props);
  }

  // to call a helper function within the render function we need to use the syntax: 'this.helperFunctionName'
  render(){
    const students = [
      {
        fullName: "Ada Lovelace",
        email: "ada@lovelace.uk",
      },
      {
        fullName: "Katherine Johnson",
        email: "kat@nasa.gov",
      }
    ];

    const studentCollection = students.map((student, i) => {
      return <Student key={i} fullName={student.fullName} email={student.email} />
    });

    return(
      <section>
        <h2 className="headerStyles">Students</h2>
        <ul>
            {studentCollection}
        </ul>
      </section>
    )
  }
}


export default StudentCollection;
