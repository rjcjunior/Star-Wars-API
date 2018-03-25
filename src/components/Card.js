import React from 'react';
import PropTypes from 'prop-types';

const Card  = ({ planet, population, climate, terrain, featured }) =>        
<div class="card">
	<div class="card-header">
    	<h3>{planet}</h3>
	</div>
  	<div class="card-body">
	    <p class="population">Population: <span>{population}</span></p>
	    <p class="climate">Climate: <span>{climate}</span></p>
	    <p class="terrain">Terrain: <span>{terrain}</span></p>
  	</div>
	<div class="card-footer">
	   <p> Featured in {featured} films</p>
	</div>          
</div>;

Card.propTypes = {
    planet: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    featured: PropTypes.number
};

Card.defaultProps = {
    planet: 'Not drawn',
    population: 0,
    climate: 'None',
    terrain: 'None',
    featured: 0
};

export default Card;