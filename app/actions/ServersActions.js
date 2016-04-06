import alt from '../alt';

class ServersActions {
  constructor() {
    this.generateActions(
      'getServersInfoSuccess',
      'getServersInfoFail'
    );
  }

  getServersInfo() {
    $.ajax({ url: '/api/servers' })
      .done((data) => {
        this.actions.getServersInfoSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getServersInfoFail(jqXhr)
      });
  }
}

export default alt.createActions(ServersActions);
