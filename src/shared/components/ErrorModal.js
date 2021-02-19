import React from 'react';

import Modal from './Modal';
import YellowButton from "../../home/components/YellowButton";

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<YellowButton onClick={props.onClear}>Okay</YellowButton>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
