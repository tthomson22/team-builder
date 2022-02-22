import React, { useState } from 'react'
import Form from './components/Form'

import './App.css';

function App() {
  const [members, setMembers] = useState([]) 
  const [values, setValues] = useState({
    name: '',
    email: '',
    role: ''
  })

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({
      name: '',
      email: '',
      role: ''
    })
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className='App'>
      <h1>Team Builder</h1>
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {
        members.map((member, index) => {
          return(
            <div key={index}>
              Email: {member.email}, Name: {member.name}, Role: {member.role}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
