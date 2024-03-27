import React, { useEffect, useState } from 'react';

function App() {
  const [results, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/?page=2&format=json')
      .then(response => response.json())
      .then(data => setRecords(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Starships</h1>
      <ul>
        {results.map((starship, index) => (
          <li key={index}>
            {starship.name} ----- {starship.model}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
