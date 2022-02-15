import {useState} from "react";
import { login } from "../helpers/helpers"

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
      <form action="/login" method="post">
      <label>Email:
          <input type="text" name="email" value={user.email} onChange={handleChange}/>
        </label>
        <label>Password:
          <input type="password" name="password" value={user.password} onChange={handleChange}/>
        </label>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </main>
)};