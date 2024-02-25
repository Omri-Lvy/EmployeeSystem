import "./Modal.css";

const Modal = ({children, isModalOpen, setIsModalOpen}) => {
    const modalCloseHandler = () => {
        setIsModalOpen(false);
    }

    const modalOverlayClickHandler = (e) => {
        e.stopPropagation()
        if ( e.target.classList.contains("modal-overlay") ) {
            modalCloseHandler()
        }
    }

    const modalExitBtnClickHandler = (e) => {
        e.stopPropagation()
        if ( e.currentTarget.classList.contains("modal-exit-btn__icon")) {
            modalCloseHandler()
        }
    }

    return (
        <div className={(isModalOpen ? "open " : "") + "modal-overlay"} onClick={modalOverlayClickHandler}>
            <div className="modal-container">
                <div className="modal-exit-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="modal-exit-btn__icon"  onClick={modalExitBtnClickHandler}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;