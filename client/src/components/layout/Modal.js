import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import styles from '../../assets/styles/layout/modal.module.scss';

const modalElement = document.getElementById('modal');

const Modal = ({ children, fade = false, defaultOpened = false, setIsActive }, ref) => {

  const [isOpen, setIsOpen] = useState(defaultOpened);

  const withFade = fade ? cx(styles.modal, styles.modal_fade) : styles.modal;

  const close = useCallback(() => {
    setIsOpen(false);
    setIsActive(false);
  }, []);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close]);

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close]);



  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    }
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={withFade}>
        <div className={styles.modal_overlay} onClick={close} />
        <div className={styles.modal_body}>{children}</div>
      </div>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);


{/* <div className={`modal ${fade ? 'modal-fade' : ''}`}>
<div className="modal-overlay" onClick={close} />
<div className="modal-body">{children}</div>
</div> */}