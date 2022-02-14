// import { login } from "../helpers/helpers"

export default function Login() {
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
    </head>
    <body>
        <main>
          <h2>Login</h2>
          <form action="/login" method="post">
          <label>Email:
              <input type="text" name="email"></input>
            </label>
            <label>Password:
              <input type="password" name="password"></input></label>
            <button type="submit">Login</button>
          </form>
        </main>
    </body>
    </html>
)};