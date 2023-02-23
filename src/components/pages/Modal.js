import './modal.scss'

function Modal({ open, modalLable, children, custom_modal, onClose }) {

    const handleClose = (e) => {
        if (e.target.className === 'modalContainer') {
            onClose()
        }
        return null
    }

    if (open) {
        return (
            <div className='modalContainer' onClick={handleClose}>
                <div className={`modal ${custom_modal}`}>
                    <div className='modal__head'>
                        <h2>{modalLable}</h2>
                        <span className='modal__close' onClick={onClose}><i class="fa-solid fa-rectangle-xmark"></i></span>
                    </div>
                    {children}
                </div>
            </div>
        )
    }
    return null
}

export default Modal;
