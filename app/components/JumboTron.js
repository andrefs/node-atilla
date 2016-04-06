import React from 'react';

class JumboTron extends React.Component {
  render() {
    return (
        // Main jumbotron for a primary marketing message or call to action
        <div className="jumbotron epic">
            <h2>This is</h2>
            <h1>Atilla</h1>
            <p>The browser-based GUI for ElasticSearch.</p>
            <ul className="welcome-links">
                <li><a href="http://npmjs.com/package/atilla">Homepage</a></li>
                <li><a href="https://github.com/andrefs/node-atilla/issues">Issues</a></li>
                <li></li>
            </ul>
        </div>
    );
  }
}

export default JumboTron;

