import Pomodoro from "../components/Pomodoro";

export default function Timers() {
  const timeData = {
    time: 25,
  };

  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container pt-2">
            <h1 className="logo-text text-center"> Timer </h1>
            <Pomodoro startingTimer={timeData.time} />
          </div>
        </div>
      </div>
    </>
  );
}
