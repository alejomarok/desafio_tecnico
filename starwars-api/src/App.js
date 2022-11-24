import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';


function App() {



    const [query, setQuery] = useState("");
    console.log(query)


  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(people.filter(people=>people.name.toLowerCase().includes("Luke")))

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await  res.json();
      setPeople(data.results)
      setLoading(false);

    }
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results)
      setLoading(false);

    }
    
          fetchPeople();
          fetchPlanets();


  }, [])

  


  return (
    <>
    

    <Router>   
      <Navbar />
      <input type="text" placeholder="search..." className="Search" onChange={e=> setQuery(e.target.value)}/>
      <Container>
        {loading ? (
          <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/people' element={<People data={people}/>}/>
          <Route exact path="/planets" element={<Planets data={planets}/>} />
        </Routes>
        )}
      </Container>
    </Router>

    </>
  );    

}

export default App;
