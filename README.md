# PomoPets

**PomoPets** is a pomodoro timer with an animated pet.

---
A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Justin Lam](https://github.com/justinklam), [Rhea Azarraga](https://github.com/Rheaazarraga), and [Arushi Katyal](https://github.com/katy-arushi).

## Getting Started

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
     - username: `labber` 
     - password: `labber` 
     - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
     - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
     - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`
  
## Dependencies
