import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault(); // stop the page refresh after click the tweet button

    db.collection("posts").add({
      displayName: "Kumar Augustya",
      username: "augustya7",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1326212698628087809/2pqiQCNt_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    // start tweetBox
    <div className="tweetBox">
      {/* start form */}
      <from>
        {/* start tweetBox__input */}
        <div className="tweetBox__input">
          {/* Avatar */}
          <Avatar src="https://pbs.twimg.com/profile_images/1326212698628087809/2pqiQCNt_400x400.jpg" />
          {/* What's happening? input */}
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
          ></input>
        </div>
        {/* end tweetBox__input */}
        {/* start tweetBox__imageInput and button */}
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          className="tweetBox__tweetButton"
          type="submit"
        >
          Tweet
        </Button>
        {/* end tweetBox__imageInput and button */}
      </from>
      {/* end form */}
    </div>
    // end tweetBox
  );
}

export default TweetBox;
