// Weather Component for the Weather app
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

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
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(
			function(temp){
				that.setState({
					isLoading: false,
					location: location,
					temp: temp
				});
			},
			function(errorMessage){
				that.setState({
					isLoading: false,
					location: '',
					temp: 0
				});
//				alert(errorMessage);
			}
		)
	},

	render: function() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if( isLoading) {
				return <h3>Fetching Weather...</h3>;
			}
			else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}></WeatherMessage>;
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;