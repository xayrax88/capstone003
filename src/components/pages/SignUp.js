import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../Firebase/Firebase";

// import styles from '../SignUp.scss'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      return navigate("/dashboard");
    }
  }, [user, loading]);

  return (

    <MDBContainer className='mt-3 d-flex justify-content-center'>
      <MDBRow>
        <MDBCol>
          <form>
            <MDBInput
              id='form3Example1'
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />

            <MDBInput
              className='mt-2 mb-4'
              type='email'
              id='form3Example3'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <MDBInput
              className='mb-4'
              type='password'
              id='form3Example4'
              label='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />


            <MDBBtn
              type='submit'
              className='mb-4'
              block
              onClick={register}
            >
              Sign Up
            </MDBBtn>

          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}