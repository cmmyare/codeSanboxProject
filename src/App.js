import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Into />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./w2.jpg" alt="we" />;
}
function Into() {
  return (
    <div className="data">
      <h1>Abdullahi Dere</h1>
      <p>
        waxaan ahay developer Mern stack wax ku dhisa markask waxaan aaan
        baraktiis ku qaataa computerkayga.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Html and Css" emoji="👊" color="blue" />
      <Skill skill="Java Script" emoji="🤛" color="green" />
      <Skill skill="PHP " emoji="💪" color="yellow" />
      <Skill skill="React js " emoji="👆" color="pink" />
      <Skill skill="PHP " emoji="💪" color="red" />
      <Skill skill="React js " emoji="👆" color="blue" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span> {props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}
