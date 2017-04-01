// Examples Component for the Weather app
var React = require('react');
var {Link} = require('react-router');

// Stateless Functional Component
var Examples = (props) => {
		return (
			<div>
				<h1 className="text-center page-title">Examples</h1>
				<p>Here are a few example locations to try out</p>
				<ol>
					<li><Link to='/?location=Miami'>Miami</Link></li>
					<li><Link to='/?location=Fresno'>Fresno</Link></li>
				</ol>
			</div>
		);
};


module.exports = Examples;