import React from "react";

import classes from "./EmojiModal.module.css";
import Modal from "./Modal.js";
import Category from "./ModalContent/Category";

const EmojiModal = (props) => {
  return (
    <Modal className={classes.backdrop} onConfirm={props.onConfirm}>
      <div className={classes.container}>
        <Category />
      </div>
    </Modal>
  );
};

export default EmojiModal;
