import { Button } from "antd";
import React from "react";
import allServicePosts from '../Services/allServicePosts';
class PostsLandPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        allServicePosts.getactivePost().then(
            (res) => {
                this.setState(
                    {
                        posts: res.data
                    }
                );
                console.log(this.state.posts);

            }
        )

    }
    _createCardsUI() {
        let cards = [],post = this.state.posts;

        for (var i = 0; i < post.length; i++) {

            cards.push(
                <div class="col-md-4">
                    <div class="card">
                            <img class="card-img-top img-raised" src={`assest/img/${post[i].imagelink}`} alt=" " />
                        <div class="card-body">
                        <p class="text-muted small-xl mb-2">price is :{post[i].price}</p>
                            <p class="card-text">Descreption :{post[i].descreption}</p>
                            <div class="col-md-6 mx-auto text-center">
                            <Button type="default" style={{background:"#212529",color:"#ffff",borderRadius:"12px"}} onClick={
                                ()=>{
                                    window.location.href="/login"
                                }
                            }>View Detiles posts</Button>
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
                            <h2 class="heading-black">You can find  any prototype.</h2>
                            {/* <p class="text-muted lead">What's need? they uoy can found any thing in landed </p> */}
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
export default PostsLandPage;