import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/streams')} className="ui dimmer modals visible active">
      <div onClick={ (e) => e.stopPropagation() } className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">
          Do you want to delete this stream ?
        </div>
        <div className="actions">
          <button className="ui button">
            <button className="ui button primary">Delete</button>
            <button className="ui button">Cancel</button>
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
