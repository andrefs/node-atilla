import React          from 'react';
import {Link}         from 'react-router';
import ServersStore   from '../stores/ServersStore'
import ServersActions from '../actions/ServersActions';

class Servers extends React.Component {
    constructor(props){
        super(props);
        this.state = ServersStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ServersStore.listen(this.onChange);
        ServersActions.getServersInfo();
    }

    componentWillUnmount() {
        ServersStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        let serversInfo = this.state.servers.map((server) => {
            return
                <tr>
                </tr>
        });

        return (
            <section id="servers" className="app-section panel panel-default">
                <header className="panel-heading">
                    <h2>Servers</h2>
                </header>
                <div className="panel-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>indexes</th>
                                <th>size</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to={"/servers/andrefs.com"}>andrefs.com</Link></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Servers;
