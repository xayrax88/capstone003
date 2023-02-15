import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import "./Dashboard.scss";
import { auth, db } from "../../Firebase/Firebase";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import { 
 deleteDoc,
  getDocs,
  collection,
  doc,
  query } from "firebase/firestore";

const useStyles = makeStyles({
  container: {
  display: 'flex',
  margin: '2rem',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginRight: '5rem',
  },
  alertText: {
    display: 'flex',
    fontSize: '20px',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  addButton: {
    display: 'flex',
    margin: '2rem',
    flexDirection: 'row-reverse',
  },
  root: {
    width: '20rem',
    height: '10rem',
    margin: '2rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Dashboard() {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) { navigate("/login") }
  }, [user]);

  const updateItem = (item) => {
    navigate("/updatepost", { state: { item } })
  };

  const handleDelete = async (item) => {
    const docRef = doc(db,`posts/${item.doc_id}`)
    try
    {
      await deleteDoc(docRef)
      fetchPosts()
    } catch (err) {
      alert(err)
    }
  }


  const fetchPosts = async () => {
    const q = query(collection(db, "posts"));
    const doc = await getDocs(q);
    const data = doc.docs.map ((d) => {
      const doc_id = d.id;
      const obj = d.data()
      obj.doc_id = doc_id
      return obj
    })
    setData(data)
  };

  const handleAddNew = ()=>{
    navigate("/createpost")
  }

useEffect(()=>{fetchPosts()},[])

  return (
    <>
      <>
        <div className={classes.addButton}>
          <Button variant="contained" onClick={handleAddNew}> Add New Post </Button>
        </div>
        {
          data.length === 0 ? 
          (<div className={classes.alertText}>No Item to show</div>) :
          <></>
        }
        <div className={classes.container}>
          {data.map((item) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.postText}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => updateItem(item)}>
                  Update
                </Button>
                <Button size="small" color="primary" onClick={() => handleDelete(item)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </>
    </>
  );
};

export default Dashboard;
