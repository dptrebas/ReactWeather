// About Component for the Weather app

var React = require('react');

// Make this a stateless functional component and only return one thing - Using fat arrows
var About = (props) => {
		return (
			<div>
				<h1 className="text-center page-title">About</h1>
				<p>This is a weather application build on React. Build 
				as part of The Complete React Web App Developer Course.</p>
				<p>Here are some of the tools used:</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - JavaScript framework used.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> 
						- Open Weather Map web API to search for weather data by city name.
					</li>
				</ul>
			</div>
		);
};

module.exports = About;