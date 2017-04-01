// Import React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require ('Main');
var Weather = require ('Weather');
var About = require ('About');
var Examples = require ('Examples');

// Load foundation styles
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Our custom app css
require('style!css!applicationStyles')

// Now actually render our class to the DOM
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
    document.getElementById('app')
);
