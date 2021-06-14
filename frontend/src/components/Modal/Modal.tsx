import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { Backdrop, Wrapper } from './Modal.styled';
import { noop } from '../../utils';

interface IModalProps {
  isOpen: boolean;
  onClickOutside?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen = true,
  onClickOutside = noop,
}) => {
  const ref = useRef(null);

  const handleClickOutside = () => {
    onClickOutside();
  };

  useOnClickOutside(ref, handleClickOutside);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Backdrop>
      <Wrapper ref={ref}>{children}</Wrapper>
    </Backdrop>,
    document.getElementById('modal')!,
  );
};

export default Modal;
