
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import From from './components/From';
import table from './components/table';


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={From} />
          <Route exact path="/table" component={table} />
        </>

      </Router>
    </div>
  );
}

export default App;
