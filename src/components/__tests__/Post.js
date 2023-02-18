function CreatePost() {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        if (!(title && postText)) {
            alert("Please provide values")
            return
        }

        const _id = uid();

        await addDoc(postsCollectionRef, {
            _id,
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/dashboard");
    };

    return (
        <div className={styles.container}>
            <h1 >Create A Post</h1>
            <div className={styles.empty}></div>
            <div className="inputGp">
                <label className={styles.titleText}> Title</label>
                <input
                    placeholder="Title..."
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
            </div>

            <div>
                <div className="inputGp">
                    <label className={styles.desText}> Description</label>
                    <textarea
                        placeholder="Post..."
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className={styles.empty}></div>
            <Button onClick={createPost} variant='contained'> Submit Post</Button>

        </div>
    );
}

export default CreatePost;