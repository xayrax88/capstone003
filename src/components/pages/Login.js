import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  MDBInput,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBContainer,
} from 'mdb-react-ui-kit';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user])

  return (
    <MDBContainer className='mt-3 d-flex justify-content-center'>
      <MDBRow>
        <MDBCol>
          <form onSubmit={(e) => {
            e.preventDefault()
            logInWithEmailAndPassword(email, password)
          }}>

            <MDBInput
              className='mb-4'
              type='email'
              id='form9Example1'
              label='Email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />



            <MDBInput
              wrapperClass='mb-4'
              type='password'
              id='form9Example2'
              label='Password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />




            <MDBBtn type='submit' className='mb-4' block>
              Login
            </MDBBtn>


            <div className='text-center'>
              <p>
                Not a member? <Link to='/sign-up'>Register</Link>
              </p>
            </div>

          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Login;