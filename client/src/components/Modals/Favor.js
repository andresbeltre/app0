import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("portal-modal");

class portalModal extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(
      <div
        className="modal fade"
        id="myModal"
        aria-labelledby="myModal"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Favor</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={this.props.toggleModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">FIELDS GO HERE</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.toggleModal}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-secondary">
                Add Favor to Tab
              </button>
            </div>
          </div>
        </div>
      </div>,
      this.element
    );
  }
}

export default portalModal;
