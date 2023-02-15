import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.scss";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user])

    return (
        <div className="login">
            <form onSubmit={(e) => {
                e.preventDefault()
                logInWithEmailAndPassword(email, password)
            }}>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="login__btn"
                    type="submit"
                >
                    Login
                </button>
                <div>
                    <span>Don't have an account? <Link to="/sign-up">Register</Link> now</span>
                </div>
            </form>
        </div>
    );
}
export default Login;