
import './App.css';
import LessonCard from '../LessonCard';

let testObject = {
  title: "Variables",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, {url:"https://www.w3schools.com/css/css_intro.asp", title: "w3schools2"}],
  questionprompt: "",
  question: "what is css?",
  answer: "dunno",
};



function App() {
  return (
    <div className="App">
      <LessonCard props={testObject}/>
    </div>
  );
}

export default App;
