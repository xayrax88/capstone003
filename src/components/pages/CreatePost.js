//"Add Task"
import Modal from "./Modal"
import { useState, useEffect } from 'react'
import './createPost.module.scss'
import { db } from '../../Firebase/Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { MDBBtn } from 'mdb-react-ui-kit';


function CreatePost({ onClose, open }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  /* function to add new post to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now(),
      });
      onClose()
    } catch (err) {
      alert(err)
    }
  }


  return (
    <Modal modalLable='Create Post' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='createPost' name='createPost'>
        <div className="input-title">
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
            value={title}
            placeholder='Enter title' />
        </div>
        <div className="text-box">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter post description'
            value={description}>
          </textarea>
        </div>
        <div className="submit-btn">
          <MDBBtn size='sm' type='submit' color='dark'>Submit</MDBBtn>
        </div>
      </form>
    </Modal>
  )
}

export default CreatePost;
