import { Button } from "antd";
import React from "react";
import './infopost.css';
import { withRouter } from 'react-router-dom';
import allServicePosts from "../Services/allServicePosts";
class InformationPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            postInfo: []
        }
    }
   
    componentDidMount() {
        allServicePosts.getPostInfo(this.state.id).then(
            (res) => {
                this.setState({
                    postInfo: res.data
                });
                console.log(this.state.postInfo);
            }
        )

    }
    render() {
        let info = this.state.postInfo;
        return (
            <section class="py-7 bg-dark section-angle top-left bottom-left" id="info">
                <div class="container">

                    <div className="rowCard">
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top img-raised" src={`/assest/img/${info.imagelink}  `} alt=" " />
                                <div class="card-body">
                                    <h5 class="card-title " style={{ color: "#212529" }}>Name:{info.ownerName}</h5>
                                    <p class="text-muted small-xl mb-2">Phone Owner: 0{info.ownerPhoneNumber}</p>
                                    <p class="text-muted small-xl mb-2">Price : {info.price}</p>
                                    <p class="text-muted small-xl mb-2">Size: {info.size}</p>
                                    <p class="text-muted small-xl mb-2">Number Room : {info.nFloor}</p>
                                    <p class="text-muted small-xl mb-2">Number Floor : {info.nFloor}</p>
                                    <p class="card-text">{info.descreption}</p>

                                </div>

                                <Button type="default" style={{ background: "#212529", color: "#ffff", borderRadius: "12px" }} onClick={
                                    () => {
                                        window.location.href = "/homepost"
                                    }
                                }>Back </Button>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}
export default withRouter(InformationPost);