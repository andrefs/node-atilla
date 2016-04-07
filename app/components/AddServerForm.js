import React from 'react';

class AddServerForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {showForm:false};
      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);
    }

    showForm(){
        this.setState({showForm: true});
    }
    hideForm(){
        this.setState({showForm: false});
    }

    render() {
        return (
            <div>
            {this.state.showForm ?
                <div className="form-inline" role="form">
                    <div className="form-group">
                        <label className="sr-only" for="host">Host</label>
                        <div className="input-group">
                            <input  className="form-control col-md-4" id="host"type="text" placeholder="Host" size="30"/>
                            <div className="input-group-addon">?</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="add btn btn-primary">Add server</button>
                    </div>
                    <div className="form-group">
                        <button className="cancel btn" onClick={this.hideForm} >Cancel</button>
                    </div>
                </div>
                : null
            }
            {this.state.showForm ? null : <button className="show btn" onClick={this.showForm} >Add server</button> }
            </div>
        );
    }
}

export default AddServerForm;
