//App: The root component that orchestrates the entire application.
import { useState, useEffect } from 'react'
import { getAllStarships } from './services/starshipService.js';
import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx';
import StarshipList from './components/StarshipList/StarshipList';
import './App.css'

const App = () => {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  useEffect(() => {
    async function fetchStarships() {
      const starships = await getAllStarships()
      console.log('Fetched starships:', starships);
      setStarshipsData(starships)
      setDisplayedStarships(starships)
    }
    fetchStarships()
  }, [])

  const handleSearch = (searchTerm) => {
    const filteredStarships = starshipsData.filter((ship) => 
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setDisplayedStarships(filteredStarships)
  }
  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch}/>
      <StarshipList starships={displayedStarships} />
    </main>
  );
}

export default App
