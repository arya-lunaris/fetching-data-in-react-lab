import StarshipCard from '../StarshipCard/StarshipCard.jsx';

const StarshipList = ({ starships }) => {
  return (
    <>
      {starships.map((starship, index) => (
        <StarshipCard key={index} starship={starship} />
      ))}
    </>
  );
}

export default StarshipList;