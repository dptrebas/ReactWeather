// About Component for the Weather app

var React = require('react');

// Make this a stateless functional component and only return one thing - Using fat arrows
var About = (props) => {
		return (
			<div>
				<h3>About</h3>
				<p>Welcome to the about page!</p>
			</div>
		);
};

module.exports = About;