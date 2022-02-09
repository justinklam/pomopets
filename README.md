# PomoPets

**PomoPets** is a pomodoro timer with an animated pet.

---
A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Justin Lam](https://github.com/justinklam), [Rhea Azarraga](https://github.com/Rheaazarraga), and [Arushi Katyal](https://github.com/katy-arushi).

## Getting Started

### Setting up the Server

1. Go to pomo-api: `cd pomo-api`
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information 
     - username: `labber` 
     - password: `labber` 
     - database: `pomo_db`
     - port: `5000`
4. Install dependencies: `npm i`
5. Create database: `sequelize db:create`
6. Run the server: `npm start`

### Setting up the Client

1. Go to pomo-react: `cd pomo-react`
2. Update proxy in the package.json with the port you used for the server
   - `"proxy": "http://localhost:5000",`
3. Install dependencies: `npm i`
4. Run the app: `npm start`
  
## Dependencies
### Server-side
### Client-side
