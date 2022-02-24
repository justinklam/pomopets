import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionsContext } from "../context/SessionsContext";
import { Form, Button } from "react-bootstrap";
import { login } from "../helpers/helpers";

export default function Login(props) {
  const { user, setUser } = props;

  const [session, setSession] = useContext(SessionsContext);

  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login(user)
      .then(response => {
        setSession({ state: response.data });
        navigate("/");
      })
      .catch(error => {
        throw error;
      });
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="body pt-5">
        <div className="login main-container">
          <div>
            <h1 className="login-h1 logo-text"> Login </h1>
            <p className="login-tagline"> Already have an account?</p>
            <p className="login-tagline">
              {" "}
              Log in now to begin your focus session and view your digital pet!{" "}
            </p>
            <Form className="login-form" action="/login" method="post">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="login-form-input"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="login-form-input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                className="login-page-button login-button"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
