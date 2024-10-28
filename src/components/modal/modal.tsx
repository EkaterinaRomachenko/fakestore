import ReactDOM from 'react-dom';
import React, { FC } from 'react';
import styles from './modal.module.css';
import { IoClose } from 'react-icons/io5';
import { useModal } from '../../Context/ModalContext';

const modalRoot: HTMLElement | null = document.querySelector('#modal-root');

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  // если модальное окно не открыто, то возвращаем null
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <IoClose className={styles.modalClose} onClick={closeModal} />
          <>{children}</>
        </div>
      </div>
    </>,
    modalRoot as HTMLElement,
  );
};

export default Modal;
