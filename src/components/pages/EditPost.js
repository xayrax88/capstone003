//"Edit Task"
import Modal from "./Modal"
import React, { useState } from "react";
import { db } from "../../Firebase/Firebase";
import './editPost.module.scss'
import { doc, updateDoc } from "firebase/firestore";
import { MDBBtn } from 'mdb-react-ui-kit';

function EditPost({ open, onClose, toEditTitle, toEditDescription, id }) {

    const [title, setTitle] = useState(toEditTitle)
    const [description, setDescription] = useState(toEditDescription)

    /* function to update/edit firestore */
    const handleUpdate = async (e) => {
        e.preventDefault()
        const postDocRef = doc(db, 'posts', id)
        try {
            await updateDoc(postDocRef, {
                title: title,
                description: description
            })
            onClose()
        } catch (err) {
            alert(err)
        }

    }

    return (
        <Modal modalLable='Edit Post' onClose={onClose} open={open}>
            <form onSubmit={handleUpdate} className='editPost'>
                <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title} />
                <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <MDBBtn size='sm' type='submit' color='dark'>Edit</MDBBtn>
            </form>
        </Modal>
    )
}

export default EditPost;
