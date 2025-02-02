import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import css from './ImageModal.module.css';

function ImageModal({ isOpen, onRequestClose, selectedImage }) {
  if (!selectedImage) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      ariaHideApp={false} // Geliştirme aşamasında kullanabilirsiniz
    >
      <button
        type="button"
        className={css.closeButton}
        aria-label="Close"
        onClick={onRequestClose}
      >
        <FaTimes />
      </button>
      <img
        src={selectedImage.urls.regular}
        alt="Image"
      />
    </ReactModal>
  );
}

export default ImageModal;
