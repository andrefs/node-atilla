import alt from '../alt';
import ServersActions from '../actions/ServersActions';

class ServersStore {
    constructor() {
        this.bindActions(ServersActions);
        this.servers = [];
    }

    onGetServersInfoSuccess(data) {
        console.log('serversInfo success', data);
        this.servers = data;
    }

    onGetServersInfoFail(jqXhr) {
        console.log('serversInfo fail');
        // Handle multiple response formats, fallback to HTTP status code number.
        //toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(ServersStore);
