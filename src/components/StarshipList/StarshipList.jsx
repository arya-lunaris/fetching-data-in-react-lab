import StarshipCard from '../StarshipCard/StarshipCard.jsx';

const StarshipList = ({ starships }) => {
  return (
    <section>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;