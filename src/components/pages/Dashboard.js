import "./Dashboard.scss";
import Post from './Post';
import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import CreatePost from './CreatePost';

function Dashboard() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [posts, setPosts] = useState([])

  /* function to get all posts from firestore in realtime */
  useEffect(() => {

    const postColRef = query(collection(db, 'posts'), orderBy('created', 'desc'))

    onSnapshot(postColRef, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className='postManager'>
      <header>Posts</header>
      <div className='dashboard__container'>
        <button
          onClick={() => setOpenAddModal(true)}>
          Create Post +
        </button>
        <div className='postManager__posts'>

          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              completed={post.data.completed}
              title={post.data.title}
              description={post.data.description}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <CreatePost onClose={() => setOpenAddModal(false)} open={openAddModal} />
      }

    </div>
  )
}

export default Dashboard;
