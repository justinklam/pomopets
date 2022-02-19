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
8. Go to `locolhost:3030`

To run migrations: `npx prisma migrate dev --name init`

### Setting up the Client

1. Go to pomo-react: `cd pomo-react`
2. Update proxy in the package.json with the port you used for the server
   - `"proxy": "http://localhost:3030",`
3. Install dependencies: `npm i`
4. Run the app: `npm start`
  
## Dependencies
### Server-side
### Client-side
