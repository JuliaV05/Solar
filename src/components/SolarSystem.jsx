import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {planets.map((planet) => (<PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
