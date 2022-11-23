import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-roter-dom'; 
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await  res.json();
      setPeople(data.results)
    }
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results)
    }

    fetchPeople();
    fetchPlanets();

  }, [])

  console.log ('data', people);


  return (
    <>

    <Router>   
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/people'>
            <People />
          </Route>
          <Route exact path='/planets'>
            <Planets />
          </Route>
        </Switch>
      </Container>
    </Router>

    </>
  );
}

export default App;
