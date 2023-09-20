import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scrollThrough';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/api/robots';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1 className='f1'>Robot Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
