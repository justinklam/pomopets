import { Dropdown, DropdownButton } from 'react-bootstrap';
import Pomodoro from "../components/Pomodoro";
import MyPet from "../components/MyPet";

export default function Timers() {
  const timeData = {
    time: 25,
  };

  return (
    <>
      <div className="body pt-5">
        <DropdownButton id="dropdown-basic-button" title="Timer Tag">
          <Dropdown.Item href="#/action-1">Study</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Entertainment</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Work</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Rest</Dropdown.Item>
        </DropdownButton>
        <div className="main-container">
          <div className="text-container pt-2">
            <h1 className="logo-text text-center"> Timer </h1>
            <Pomodoro startingTimer={timeData.time} />
            <MyPet/>
          </div>
        </div>
      </div>
    </>
  );
}
