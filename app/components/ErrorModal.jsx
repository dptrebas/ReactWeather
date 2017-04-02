// ErrorModal Component for the Weather app
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

// Make this a stateless functional component and only return one thing - Using fat arrows
var ErrorModal = React.createClass( {

	propType: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function () {
		return {
			title: 'Error'
		};
	},

	componentDidMount: function() {
		var {title, message} = this.props;
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
					 OK
					</button>
				</p>
			</div>
		);

		// Use jQuery to update the DOM
		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},

	render: function() {
		return (
			<div></div>
		);
	}
});

module.exports = ErrorModal;