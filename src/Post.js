import { Avatar } from '@material-ui/core';
import React, { forwardRef} from 'react'
import './Post.css';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
({ displayName,
    username,
    verified,
    text,
    image,
    avatar 
}, ref) => {

        return (

            // start post
            <div className="post" ref={ref}>
                {/* start post__avatar */}
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                {/* end post__avatar */}

                {/* end post__body */}
                <div className="post__body">
                    {/* start post__header */}
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>{displayName} {" "}<span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge" />} @{username}</span>
                            </h3>
                        </div>
                    </div>
                    {/* end post__header */}
                    {/* post__headerDescription */}
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                    {/* end post__headerDescription */}
                    <img src={image} alt=""/> {/* start/end img tag*/}
                    {/* start post__footer */}
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon className="ChatBubbleOutlineIcon" fontSize="small" />
                        <RepeatIcon className="RepeatIcon" fontSize="small" />
                        <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                        <PublishIcon className="PublishIcon" fontSize="small" />
                    </div>
                    {/* end post__footer */}
                </div>
                {/* end post__body */}
            </div>
            // end post
        
        );
    }
);

export default Post; 
