import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import CreatePost from './components/pages/CreatePost';
import Footer from './components/Footer';
import Dashboard from './components/pages/Dashboard';
import EditPost from './components/pages/EditPost';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/createpost" element={<CreatePost />} />
          <Route exact path="/editpost" element={<EditPost />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;