import React from "react";
import { } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <section class="smart-scroll">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-dark">
                        <a class="navbar-brand heading-black" href="/homePost">
                           Posts
                        </a>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/mypost">My Post</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/createpost">Create Post</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/profile">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link page-scroll" onClick={
                                        ()=>{localStorage.clear();
                                            window.location.href="/login"  }
                                    } >Logout</p>
                                </li>
                                
                             
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}
export default Nav;