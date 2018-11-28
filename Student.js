import React from 'react';
import PropTypes from 'prop-types';


class Student extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    const name = this.props.name;

    return (
      <section>
        <h2>Student Component</h2>
        <li>Name: {name}</li>
        <li>Email: {this.props.email}</li>
        <li>Age: {this.props.age}</li>
      </section>
    )
  }
}

// propTypes should be defined after the component and before the export
Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
  age: PropTypes.number,
};

Student.defaultProps = {
  email: 'no email on file',
  age: 'my age isnt your business'
}

export default Student;
