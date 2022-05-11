import React, { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
};

const Modal = (props) => {
  return (
    <Fragment className={classes.backdrop}>
      <Backdrop className={classes.backdrop} onConfirm={props.onConfirm} />
      <ModalOverlay className={classes.backdrop}>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
