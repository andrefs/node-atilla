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
        console.log('onChange', state);
        this.setState(state);
    }

    render() {
        let serversInfo = this.state.servers.map((server) => {
            return (
                <tr key="{server.id}">
                    <td><Link to={"/servers/"+server.id}>{server.name}</Link></td>
                    <td>{server.indexes.length}</td>
                    <td>{server.docs.count}</td>
                    <td>{server.store.size_in_bytes}</td>
                    <td></td>
                </tr>
            );
        });
        console.log('XXXXXXXX 2', serversInfo);

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
                                <th>docs</th>
                                <th>size</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {serversInfo}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Servers;
