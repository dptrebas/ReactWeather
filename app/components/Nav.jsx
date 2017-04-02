// Nav Component for the Weather app
var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	// If they search from here - do a search
	onSearch: function(e){
		e.preventDefault();

		var location = this.refs.search.value;
		if( location.length > 0)
		{	
			this.refs.search.value = '';
			var encodedLocation = encodeURIComponent(location);
			window.location.hash = '#/?location='+encodedLocation;
		}

	},

	render: function() {
		return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Weather App</li>
					<li>
						<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
					</li>
					<li>
						<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
					</li>
					<li>
						<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<form onSubmit={this.onSearch}>
				<ul className="menu">
					<li><input type="search" placeholder="Search weather by city" ref="search"/></li>
					<li><button type="submit" className="button">Get Weather</button></li>
				</ul>
				</form>
			</div>
		</div>
	  );
	}
});

module.exports = Nav;

