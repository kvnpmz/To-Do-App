import logo from './logo.svg';
import './App.css';
import EventCard from './Components/EventCard/EventCard.js';
import TodoContainer from './Components/TodoContainer/TodoContainer.js';
import { TodoData } from './Components/TodoContainer/TodoData.js'; 
import IntegrationPanel from './Components/IntegrationPanel';

function App() {
  return (
    <div className="App">
      <IntegrationPanel options={TodoData}/>
    </div>
  );
}

export default App;
