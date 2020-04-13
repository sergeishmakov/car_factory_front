import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '60%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'none',
  },
};

const app = document.querySelector('#root');

export function Dialog({ style = customStyles, opened, onClose, children, label, className }) {
  return (
    <Modal
      appElement={app}
      style={style}
      className={className}
      isOpen={opened}
      onRequestClose={onClose}
      contentLabel={label}
    >
      {children}
    </Modal>
  );
}
