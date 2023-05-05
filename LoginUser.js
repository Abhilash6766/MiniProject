import React,{useState} from "react"
// import { useHistory } from 'react-router-dom';
// import {Component} from "react"
// import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Login.css"
function Login(){
    // const history = useHistory();

    const [uname,setUname]=useState("")
    const [pass,setPass]=useState("")
    const[aid,setAid]=useState("")

    // const handleButtonClick = () => {
    //     history.push('welcome.js');
    //   };
    const handleAidChange=(event)=>{
        setAid(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUname(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPass(event.target.value);
      };
      const final=(event)=>
      {
        event.preventDefault();
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
    <h3 className="heading">Please Login</h3>
    <div className="login">
            <form onSubmit={final}>
            <label>
          Username:
          <input type="text" value={uname} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
        Adhar ID:
          <input type="number" value={aid} onChange={handleAidChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={pass} onChange={handlePasswordChange} />
        </label>
        <br />
        <Button variant="secondary" type="submit  ">Login</Button>
            </form>
            Do not have an account ?
            <Button variant="secondary"><Link to='/register' className="regbtn">Register</Link></Button>
            </div>
        </div>
      );
      
}

 export default Login;