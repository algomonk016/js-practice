import './App.css';
import Accordion from './component/Accordion';
import { ACCORDIONS } from './constant/Accordion';

function App() {
  return (
    <div className="App">
      <Accordion accordions={ACCORDIONS} />
    </div>
  );
}

export default App;
