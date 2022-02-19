# PomoPets

**PomoPets** is an incentivized Pomodoro timer. Begin your focus session with a mysterious, hatchable egg and upon completing your focus session, you are rewarded with a cute digital pet!

A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Justin Lam](https://github.com/justinklam), [Rhea Azarraga](https://github.com/Rheaazarraga), and [Arushi Katyal](https://github.com/katy-arushi).

## Getting Started

### Setting up the Server

1. Go to pomo-api: `cd pomo-api`
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Create a database in pSQL named `pomo_db`
4. Update the .env file with your correct local information 
     - PORT: `3030`
     - DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/pomo_db"
5. Install dependencies: `npm i`
6. Create database: `sequelize db:create`
7. Run the server: `npm start`
8. Go to `localhost:3030`

To run migrations: `npx prisma migrate dev --name init`

### Setting up the Client

1. Go to pomo-react: `cd pomo-react`
2. Update proxy in the package.json with the port you used for the server
   - `"proxy": "http://localhost:3030",`
3. Install dependencies: `npm i`
4. Run the app: `npm start`
  
## Dependencies
### Server-side
    "@prisma/client": "^3.9.2",
    "bcryptjs": "^2.4.3",
    "bundle": "^2.1.0",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "dotenv": "^16.0.0",
    "ejs": "^3.1.6",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pg": "^8.7.3"
    
### Client-side
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.25.0",
    "bootstrap": "^5.1.3",
    "react": "^17.0.2",
    "react-bootstrap": "^2.1.2",
    "react-circular-progressbar": "^2.0.4",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "sass": "^1.49.7",
    "web-vitals": "^2.1.4"
