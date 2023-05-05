import React, { useState } from 'react';


// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap"
import "./Register.css"
const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const[aid,setAid]=useState("");
  const[dob,setDOB]=useState("");
  
  const handleAidChange=(event)=>{
    setAid(event.target.value);
};

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmChange = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password!==confirmpass)
    alert("password not matched! try again ");
    else{
      const user = {aid,username,password,email,dob}
      fetch("http://localhost:3030/user",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
      }).then(()=>{
        console.log("Added")
      })
    }  
  };
  const handleDOBChange=(event)=>{
    setDOB(event.target.value);
  }

  return (
    <div>
        {/* <Navbar bg="danger" expand="lg" variant="dark">
      <Container>
        <h1 className="text">Online Voting </h1>
          <Nav className="me-auto">
            <Button variant="light"className="btn" >User</Button>
            <Button variant="light" className="btn">Register</Button>
            <Button variant="light" className="btn">Admin</Button>
          </Nav>
      </Container>
    </Navbar> */}
        <h2 className='heading'>Please Register</h2>
        <div className='register'>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label><br>
      </br>
      <label>
        UserEmail:
        <input type="email" value={email} onChange={handleEmailChange} />
        <br></br>
      </label>
      <br></br>
      <label >
        DOB:
        <input type='date' value={dob} onChange={handleDOBChange} />
      </label><br></br>
      <label> 
        Adhar ID:
          <input type="number" value={aid} onChange={handleAidChange} />
        </label><br></br>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label><br></br>
        <label>
            Confirm password:
            <input type="password" value={confirmpass} onChange={handleConfirmChange} />
        </label><br></br>
      <Button type="submit" variant='secondary'> Register</Button>
    </form>
    </div>
    </div>
  );
};

export default RegistrationPage;
