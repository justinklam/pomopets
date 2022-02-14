// import { register } from "../helpers/helpers"

export default function Register() {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Register</title>
    </head>
    <body>
        <main>
          <h2>Register</h2>
          <form action="/register" method="post">
            <label>User Name:
              <input type="text" name="username"></input>
            </label>
            <label>Email:
              <input type="text" name="email"></input>
            </label>
            <label>Password:
              <input type="password" name="password"></input></label>
            <button type="submit">Register</button>
          </form>
        </main>
    </body>
    </html>
)};