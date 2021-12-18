import React from 'react'
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Avatar, Button } from "@material-ui/core";
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>
            {/* SIdebarOption */}

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button -> Tweet */}

            <Button variant="outlined" className="sidebar__tweet" fullWidth type="submit">Tweet</Button>

            {/* Profile logo */}
            <div class="sidebar__login">
                <div class="sidebar__profile__avatar">
                    <Avatar src="https://pbs.twimg.com/profile_images/1326212698628087809/2pqiQCNt_400x400.jpg" alt=""/>
                </div>
                <p class="sidebar__profile">Kumar Augustya</p>
                <p class="sidebar__username">@augustya7</p>
            </div>
        </div>
    )
}

export default Sidebar;
