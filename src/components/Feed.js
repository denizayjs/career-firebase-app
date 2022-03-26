import React, { useEffect, useState } from "react";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    getDocs(collection(db, "posts")).then((item) => {
      setPosts(
        item.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  };

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: "Deniz AY",
      description: "This is test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    getPosts();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts?.map(({ id, item }) => (
        <Post
          key={id}
          name={item.name}
          description={item.description}
          message={item.message}
          photoUrl={item.photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
