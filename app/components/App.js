import React        from 'react';
import NavBar       from './NavBar';
import JumboTron    from './JumboTron';
import NoJavaScript from './NoJavaScript';
import Footer       from './Footer';

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <NavBar />
                <JumboTron />
                <NoJavaScript />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
