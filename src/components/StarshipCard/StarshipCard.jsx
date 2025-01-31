const StarshipCard = ({ starship }) => {
    return (
      <>
        <h2>{starship.name}</h2>
        <p>Class: {starship.starship_class}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Model: {starship.model}</p>
      </>
    );
  };
  
  export default StarshipCard;