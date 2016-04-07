import React          from 'react';
import {Link}         from 'react-router';
import ServersStore   from '../stores/ServersStore'
import ServersActions from '../actions/ServersActions';
import humanSize      from 'human-size';
import cookie         from 'react-cookie';
import AddServerForm  from './AddServerForm';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover        from 'react-bootstrap/lib/Popover';

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
        var expireDate = new Date();
        expireDate.setYear(expireDate.getYear()+1);
        cookie.save('atilla_servers', 'cenas', {path:'/', domain:'localhost', maxAge: 365*24*60*60});
    }

    render() {
        let serversInfo = this.state.servers.map((server) => {
            const numIndices  = Object.keys(server.indices).length;
            const indicesList = Object.keys(server.indices).map((indice) => {
                return (
                    <li key={indice}>{indice}</li>
                );
            });
            const popover = (
                <Popover title={numIndices+" Indice"+(numIndices ? 's' : '')}>
                    <ul>{indicesList}</ul>
                </Popover>
            );
            return (
                <tr key={server.id}>
                    <td><Link to={"/servers/"+server.id}>{server.name}</Link></td>
                    <td>
                        <OverlayTrigger placement="right" overlay={popover}>
                            <span className="has-details">{numIndices}</span>
                        </OverlayTrigger>
                    </td>
                    <td>{server.docs.count}</td>
                    <td>{humanSize(server.store.size_in_bytes)}</td>
                    <td></td>
                </tr>
            );
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
                                <th>indices</th>
                                <th>docs</th>
                                <th>size</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {serversInfo}
                        </tbody>
                    </table>
                    <AddServerForm />
                </div>
            </section>
        );
    }
}

export default Servers;
