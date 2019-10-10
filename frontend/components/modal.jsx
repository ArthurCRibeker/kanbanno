import React from 'react';
import { connect } from 'react-redux';

import NewBoardFormContainer from './board/new_board_form_container';
import UpdateBoardFormContainer from './board/update_board_form_container';
import { closeModal } from '../actions/modal_actions';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'newBoard':
      component = <NewBoardFormContainer />;
      break;
    case 'updateBoard':
      component = <UpdateBoardFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

