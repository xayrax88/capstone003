import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import styles from '../SignUp.scss'

import {
    auth,
    registerWithEmailAndPassword,
} from "../../Firebase/Firebase";
function Register() {
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
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className={styles.register__textBox}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <br />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <br />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <br />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <br />
                <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Register;