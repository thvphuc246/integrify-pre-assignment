import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PeopleList from "./components/PeopleList"
import PersonDetails from './components/PersonDetails';

function App() {
  let [people, setPeople] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => setPeople(data))
  },[]);

  return (
    <Router>
      <Route exact path="/" component={PeopleList}>
        <PeopleList people={people} />
      </Route>

      <Route path="/person/:id">
        <PersonDetails people={people} />
      </Route>
    </Router>
  );
}

export default App;
