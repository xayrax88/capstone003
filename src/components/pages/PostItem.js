import Modal from "./Modal"
import './postItem.scss'

function PostItem({ onClose, open, title, description }) {

    return (
        <Modal modalLable='Post Item' onClose={onClose} open={open}>
            <div className='postItem'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Modal>
    )
}

export default PostItem