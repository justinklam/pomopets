import {useState} from "react";
import { login } from "../helpers/helpers"
import { Form, Button } from 'react-bootstrap';


export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value})
  };

  return (
    <main>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>
      </Form>
    </main>
)};