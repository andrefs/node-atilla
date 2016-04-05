var React    = require('react');
var ReactDOM = require('react-dom');

var Alerts   = require('./components/Alerts.jsx');
var Section  = require('./components/Section.jsx');
var Errors   = require('./components/Errors.jsx');

//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);



var AtillaApp = React.createClass({
    render: function(){
        return (
            <div>
                <Alerts  />
                <Section />
                <Errors  />
            </div>
        );
    }
});

ReactDOM.render(<AtillaApp />, atilla);
