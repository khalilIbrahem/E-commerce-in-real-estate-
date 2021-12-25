import React from "react";
import './sidebar.css';


class Sidebar extends React.Component {

    render() {

        return (
            <div class="sidebar">
                <div class="logo_content">
                    <div class="logo">
                        <div class="logo_name"><img src="assets/assets/images/logo.png" alt="" /></div>
                    </div>
                    {/* <img src="assets/assets/images/category.png" alt="" id="btn" /> */}
                </div>
                <ul class="nav_list">
                    <li>
                        <a href="/homesidebar">
                            <img src="assets/assets/images/home.png" alt="" />
                            <span class="links_name"> Home Sidebar</span>
                        </a>
                        <span class="tooltipe"> Home Sidebar</span>
                    </li>
                    <li>
                        <a href="/users">
                            <img src="assets/assets/images/pepole2.png" alt="" />
                            <span class="links_name">Users</span>
                        </a>
                        <span class="tooltipe"> Users</span>
                    </li>
                    <li>
                        <a href="/posts">
                            <img src="assets/assets/images/post.png" alt="" />
                            <span class="links_name"> Posts</span>
                        </a>
                        <span class="tooltipe"> Posts</span>
                    </li>
                    <li>
                        <a href="/category">
                            <img src="assets/assets/images/category.png" alt="" />
                            <span class="links_name"> Category</span>
                        </a>
                        <span class="tooltipe"> Category</span>
                    </li>
                </ul>
            </div>

        )
    }

}
export default Sidebar;