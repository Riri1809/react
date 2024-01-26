import {learnerData} from './data/learnerData';
// import useState

import './App.css';

function App() {
  // create a new state passing the learnerData
  const [learners, setLearners] = useState(learnerData);
  // const [learners, setLearners] = useState(learnerData)
  return (
    <div className="App">
      <h1>Learner App</h1>
      {learners.map(learner => {
        
      })}
    </div>
  );
}

export default App;