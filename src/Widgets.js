import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
    
function Widgets() {
    return (
        <div className="widgets">
            {/* start widgets__input */}
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            {/* end widgets__input */}

            {/* start widgets__widgetContainer */}
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1276396101872922625"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 400 }} />
                <TwitterShareButton url={"https://www.linkedin.com/in/b3ns44d/"} options={{ text: "This is my LinkedIn #Follow_Me", via: "b3ns44d" }} />

            </div>
            {/* end widgets__widgetContainer */}
        </div>
    )
}

export default Widgets
