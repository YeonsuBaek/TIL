import ReactDom from 'react-dom';
import Overlay from './Overlay';
import OrderModal from './OrderModal';

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <OrderModal />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
