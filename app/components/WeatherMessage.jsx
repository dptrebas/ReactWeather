// Weather Component for the Weather app
var React = require('react');

var WeatherMessage = ({temp,location}) =>{
	return (
		<div>
			<h3>It is {temp} degrees in {location}</h3>
		</div>
	);
};


module.exports = WeatherMessage;