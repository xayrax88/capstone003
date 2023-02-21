import "./Dashboard.scss";
import Post from './Post';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import CreatePost from './CreatePost';
import { db, auth } from "../../Firebase/Firebase";


function Dashboard() {
  const [user] = useAuthState(auth);

  const [openAddModal, setOpenAddModal] = useState(false)
  const [posts, setPosts] = useState([])


  const navigate = useNavigate();
  useEffect(() => {
    if (!user) { navigate("/login") }
  }, [user]);




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
