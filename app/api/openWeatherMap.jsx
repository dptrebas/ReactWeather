// API For getting the weather
var axios = require('axios');

// API Key 33329bdb9ef6909f0ddd7c949b11c4a3

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=33329bdb9ef6909f0ddd7c949b11c4a3&units=imperial';


module.exports = {
	getTemp: function (location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(
			function(res){
				if( res.data.cod && res.data.message ){
					throw new Error(res.data.message);
				}
				else
				{
					return res.data.main.temp;
				}
			},
			function(res){
				throw new Error('Unable to fetch weather for that location.');
//				throw new Error(res.response.data.message);
			}
		)
	}
}