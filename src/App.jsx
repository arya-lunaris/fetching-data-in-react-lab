import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx'
import StarshipList from './components/StarshipList/StarshipList.jsx'
import { useState, useEffect } from 'react'
import { getStarships } from './services/starShipService.js'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [starshipsData, setStarshipsData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const response = await getStarships()
        console.log(response)
        setStarshipsData(response.data.results)

      } catch (error) {
        console.error("Error fetching starships:", error);
        setError();
      }
    }
    getInitialData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await getStarships(searchTerm)
      console.log(response)
      setStarshipsData(response.data.results)
      setSearchTerm("")
    } catch (error) {
      console.error("Error fetching starships:", error);
      setError();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Enter starship name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
        <button onClick={() => useEffect}>Reset</button>
      </form>
      <StarshipList starships={starshipsData} />
    </>
  );
}
export default App;