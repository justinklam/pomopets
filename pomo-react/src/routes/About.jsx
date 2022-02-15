import AltNavBar from '../components/AltNavBar';

export default function About() {
  return (
    <>
      <AltNavBar />
      <div className="body pt-5">
        <div className="main-container">
          <div className="about-text-container pt-2">
            <h1> About </h1>
            <div className="about-text">

              <p> The Pomodoro Technique is a time management method that can be used for any task. For many people, time is an enemy. The anxiety triggered by “the ticking clock”, especially when it involves a deadline, leads to ineffective work and study habits which in turn lead to procrastination.</p>
              <p>The Pomodoro Technique aims to use time as a valuable ally in accomplishing what we want to do in the way we want to do it, and to enable us to continually improve the way we work or study.</p>

              <p>Other benefits:
                <ul>
                <li>Alleviate anxiety linked to beginning</li>
                  <li>Enhance focus and concentration by cutting down on interruptions</li>
                  <li>Increase awareness of your decisions</li>
                  <li>Boost motivation and keep it constant</li>
                  <li>Bolster the determination to achieve your goals</li>
                  <li>Refine the estimation process, both in qualitative and quantitative terms</li>
                  <li>Improve your work or study process</li>
                  <li>Strengthen your resolve to keep on applying yourself in the face of complex situations</li>
                  </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};