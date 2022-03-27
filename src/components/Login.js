import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login } from "../features/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = async () => {
    if (!name) return alert("Please enter a Full Name");
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userAuth) => {
        updateProfile(userAuth.user.auth.currentUser, {
          displayname: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayname: name,
              photoUrl: profilePic,
            })
          );
        });
      }
    );
  };
  const loginToApp = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayname: userAuth.user.name,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <img src="logo512.png" alt="logo" />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic Url (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
