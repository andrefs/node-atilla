import React from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

class AddServerForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {showForm:false};
      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    showForm(){
        this.setState({showForm: true});
    }
    hideForm(){
        this.setState({showForm: false});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
    }

    render() {
        const tooltip = (
            <Tooltip id={this.props.id} >user:pass@localhost:9200/index</Tooltip>
        );
        return (
            <div>
            {this.state.showForm ?
                <div className="form-inline" role="form">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="host">Host</label>
                        <div className="input-group">
                            <input  className="form-control col-md-4" id="host"type="text" placeholder="Host" size="30"/>
                            <OverlayTrigger placement="top" overlay={tooltip}>
                                <div className="input-group-addon"><strong>?</strong></div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="add btn btn-primary" onClick={this.handleSubmit} >Add server</button>
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
