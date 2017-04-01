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
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}></WeatherForm>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;