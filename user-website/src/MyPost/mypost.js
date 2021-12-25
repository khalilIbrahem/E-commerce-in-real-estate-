import { Button } from "antd";
import React from "react";
import { withRouter } from 'react-router-dom';
import allServicePosts from '../Services/allServicePosts';
const user_id = localStorage.getItem('Id');
class MyPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
        this.deletePost = this.deletePost.bind(this);
        this.Updatepostinfo=this.Updatepostinfo.bind(this);
    }
    deletePost(id) {
        allServicePosts.deletePostById(id).then(
            (res) => {
                this.setState({ posts: this.state.posts.filter(S => S.id !== id) });
                console.log("postinfo=" + this.state.posts);

            }
        )
    }

    componentDidMount() {
        allServicePosts.getUserPost(user_id).then(
            (res) => {
                this.setState({ posts: res.data });
                console.log(this.state.posts);
                console.log(user_id);
            }

        );
    }
    viewPostInfo(id) {
        this.props.history.push(`/infopost/${id}`);
    }
    Updatepostinfo(id) {
        this.props.history.push(`/updatepost/${id}`);
    }
    _createCardsUI() {
        let cards = [], post = this.state.posts;

        for (var i = 0; i < post.length; i++) {

            cards.push(
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top img-raised" src={`assest/img/${post[i].imagelink}`} alt=" " />
                        <div class="card-body">
                            <p class="text-muted small-xl mb-2">price is :{post[i].price}</p>
                            <p class="card-text">Descreption: {post[i].descreption}</p>
                            <div>
                                <button data-number={post[i].id} style={{ background: "#212529", width: "150px", color: "#ffff", borderStyle: "hidden", borderRadius: "12px", marginLeft: "5px" }} onClick={
                                    (event) => {
                                        let x = event.target.getAttribute("data-number");
                                        this.viewPostInfo(x);
                                    }
                                }>View Detiles posts</button>
                                <button data-number={post[i].id} style={{ background: "red", width: "150px", color: "#ffff", borderStyle: "hidden", borderRadius: "12px", marginLeft: "5px" }} onClick={
                                    (event) => {
                                        let x = event.target.getAttribute("data-number");
                                        this.deletePost(x);
                                        window.location.reload();
                                    }
                                }>Delete Post</button>
                                <button data-number={post[i].id} style={{ background: "#212529", width: "150px", color: "#ffff", borderStyle: "hidden", borderRadius: "12px", marginLeft: "25%", marginTop: "10px" }}
                                    onClick={
                                        (event) => {
                                            let x = event.target.getAttribute("data-number");
                                            this.Updatepostinfo(x);
                                        }
                                    }
                                >Update Post</button>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }
        return cards;
    }
    render() {
        return (
            <section class="py-7 bg-dark section-angle top-left bottom-left" id="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto text-center">
                            <h2 class="heading-black">All My Posts .</h2>
                            <Button type="ghost"  style={{marginLeft:"550px",borderRadius:"13px",background:"green",color:"#fff"}} onClick={
                                ()=>{
                                    window.location.href="/createpost"
                                }
                            }>Create new post</Button>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <br></br>

                        {this._createCardsUI()}

                    </div>
                </div>
            </section>

        );

    }
}
export default withRouter(MyPost);