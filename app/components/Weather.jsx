// Weather Component for the Weather app
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false
		}
	}
	,

	handleSearch: function (location){
		var that = this;

		// We are loading
		this.setState({
			isLoading: true,
			errorMessage: undefined
			});

		openWeatherMap.getTemp(location).then(
			function(temp){
				that.setState({
					isLoading: false,
					location: location,
					temp: temp
				});
			},
			function(e){
				that.setState({
					isLoading: false,
					errorMessage: e.message,
					location: '',
					temp: 0
				});
//				alert(errorMessage);
			}
		)
	},

	// See if we should do a search from a passed in parameter
	componentDidMount: function () {
		var location = this.props.location.query.location;

		// If a location was passed in - Set it and then go back to the root
		if( location && location.length > 0 ){
			this.handleSearch(location);
			window.location.hash = '/#';
		}
	},

	// See if the location changed
	componentWillReceiveProps: function (NewProps) {
		var location = NewProps.location.query.location;

		// If a location was passed in - Set it and then go back to the root
		if( location && location.length > 0 ){
			this.handleSearch(location);
			window.location.hash = '/#';
		}
	},

	render: function() {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if( isLoading) {
				return <h3 className="text=center">Fetching Weather...</h3>;
			}
			else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}></WeatherMessage>;
			}
		}

		function renderError() {
			if( typeof errorMessage === 'string'){
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;