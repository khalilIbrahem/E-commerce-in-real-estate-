import React from "react";
class Navebar extends React.Component {
    render() {
        return (
            <section class="smart-scroll">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-dark">
                        <a class="navbar-brand heading-black" href="/">
                        User Website
                        </a>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/post">Post</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/login">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/signup">Sign UP</a>
                                </li>
                             
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
    );
    }
}
export default Navebar;