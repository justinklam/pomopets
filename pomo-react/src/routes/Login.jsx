import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { SessionsContext } from "../context/SessionsContext";
import { Form, Button } from 'react-bootstrap';
import { login } from "../helpers/helpers"

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [session, setSession] = useContext(
    SessionsContext
  );

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user).then((response) => {
      // console.log('Login response', response);
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
        <div className="main-container">
          <div className="text-container">
            <h1 className="logo-text"> Login </h1>
            <Form action="/login" method="post">

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
              </Form.Group>

              <Button className="login-button" variant="primary" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )};

