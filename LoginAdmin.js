import React, { useState } from 'react';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap"
import "./Admin.css"
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Add code to validate username and password and handle login logic
  };

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
    <h2 className='heading'>Admin Login</h2>
    <div className='admin'>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <Button type="submit" variant='secondary'>Login</Button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;
