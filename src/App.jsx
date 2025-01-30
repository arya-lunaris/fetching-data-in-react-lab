import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx'
import StarshipList from './components/StarshipList/StarshipList.jsx'
import { useState, useEffect } from 'react'
import { getStarships } from './services/starShipService.js'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    const getInitialData = async () => {
      try {
        const response = await getStarshipsData('')
        setStarshipsData({
          name: response.data.name,
          starship_class: response.data.starship_class,
          manufacturer: response.data.manufacturer,
          model: response.data.model
        })
        setDisplayedStarships({
          name: response.data.name,
          starship_class: response.data.starship_class,
          manufacturer: response.data.manufacturer,
          model: response.data.model
        })

      } catch (error) {
        // console.error("Error fetching starships:");
        // setError();
      }
    }
    getInitialData()
  }, [])


  const getStarshipsData = async () => {
    try {
      const response = await getStarshipsData(searchTerm)
      setStarshipsData({
        name: response.data.name,
        starship_class: response.data.starship_class,
        manufacturer: response.data.manufacturer,
        model: response.data.model
      })

    } catch (error) {
      // console.error("Error fetching starships:");
      // setError();
    }
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <form onSubmit={getStarshipsData}>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Enter starship name"
          value={searchTerm}
          onChange={(error) => setSearchTerm(error.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default App;