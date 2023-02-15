import React, { useEffect, useState } from "react";
import { db, auth } from "../../Firebase/Firebase";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './createPost.module.scss'
import { Button } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";

const UpdatePost = () => {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [post, setPost] = useState({})

    let navigate = useNavigate();
    let location = useLocation();

    const updatePost = async () => {
        const docRef = doc(db, `posts/${post.doc_id}`)
        const post_data = {
            _id: post._id,
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        }
        try {
            await updateDoc(docRef, post_data)
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating document(s): ', error);
        }
    };

    useEffect(() => {
        setPost(location?.state?.item)
    }, [])

    useEffect(() => {

        if (!post) return

        setTitle(post.title);
        setPostText(post.postText)
    }, [post])

    return (
        <div className={styles.container}>
            <h1 >Update Post</h1>
            <div className={styles.empty}></div>
            <div className="inputGp">
                <label className={styles.titleText}> Title</label>
                <input
                    placeholder="Title..."
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
            </div>

            <>
                <div className="inputGp">
                    <label className={styles.desText}> Description</label>
                    <input
                        placeholder="Post..."
                        value={postText}
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    />
                </div>
            </>
            <div className={styles.empty}></div>
            <Button onClick={updatePost} variant='contained'> Update Post</Button>

        </div>
    );
}

export default UpdatePost;
