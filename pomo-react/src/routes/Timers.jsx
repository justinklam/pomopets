import Pomodoro from "../components/Pomodoro";
import AltNavBar from '../components/AltNavBar';


export default function Timers() {
  return (
    <>
      <AltNavBar />
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container pt-2">
            <h1 className="logo-text"> Timer </h1>
            <Pomodoro />
          </div>
        </div>
      </div>
    </>
  );
}