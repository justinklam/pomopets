import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { register } from "../helpers/helpers"
import { Form, Button } from 'react-bootstrap';
import { SessionsContext } from "../context/SessionsContext";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [session, setSession] = useContext(
    SessionsContext
  );

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user).then((response) => {
      setSession({ state: response.data });
      navigate("/");
    })
    .catch((error) => {
      throw error;
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value})
  };

  return (
    <>
      <div className="body pt-5">
        <div className="register main-container">
          <div className="text-container">
            <h1 className="register-h1 logo-text"> Register </h1>
            <p className='register-tagline'>Ready to register?</p>
            <p className='register-tagline'>Join PomoPets now to get your own digital pet!</p>
            <Form className="register-form" action="/register" method="post"> 

            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>Username</Form.Label>
              <Form.Control className="register-form-input" type="text" placeholder="Enter Username" name="username" value={user.username} onChange={handleChange}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control className="register-form-input" type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className="register-form-input" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            </Form.Group>

            <Button className="register-page-button register-button" variant="primary" type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </Form>
          </div>
        </div>
      </div>
    </>
  )};