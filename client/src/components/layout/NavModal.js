import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './assets/modal.css'

const modalElement = document.getElementById('modal');

const Modal = ({ children, fade = false, defaultOpened = false, setIsActive }, ref) => {

  const [isOpen, setIsOpen] = useState(defaultOpened);

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
      <div className={`modal ${fade ? 'modal-fade' : ''}`}>
        <div className="modal-overlay" onClick={close} />
        {/* <span role="button" className="modal-close" aria-label="close" onClick={close}>
          <FontAwesomeIcon icon={faTimes} />
        </span> */}
        <div className="modal-body">{children}</div>
      </div>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);