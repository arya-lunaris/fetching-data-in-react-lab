import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx'
import StarshipList from './components/StarshipList/StarshipList.jsx'
import { useState, useEffect } from 'react'
import { getStarships } from './services/starShipService.js'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [starshipsData, setStarshipsData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const response = await getStarships()
        setStarshipsData(response.data.results)
      } catch (error) {
        setError('Error fetching starships data.');
      }
    }
    getInitialData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true); 
    try {
      const response = await getStarships(searchTerm)
      setStarshipsData(response.data.results)
    } catch (error) {
      setError('Error fetching starships data.');
    } finally {
      setIsLoading(false);
      setSearchTerm('');
    }
  };

  const handleReset = async () => {
    setIsLoading(true);
    setHasSearched(false); 
    try {
      const response = await getStarships();
      setStarshipsData(response.data.results);
    } catch (error) {
      setError('Error resetting starships data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <form onSubmit={handleSubmit}>
        <h3>Search</h3>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Enter starship name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
        {hasSearched && <button type="button" onClick={handleReset}>Show all starships</button>}
      </form>
      <h2>Starships:</h2>
      <StarshipList starships={starshipsData} />
    </>
  );
}

export default App;