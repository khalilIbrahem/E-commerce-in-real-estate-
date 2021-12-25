import React from 'react';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import allServicePosts from '../Services/allServicePosts';
import './postinfo.css';


class PostInfo extends React.Component {
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

        return (
            <div className="site-layout-background-postInfo" >
                <p className="title-postInfo"><span id="title">Post Information</span></p>
                <p className="title-back"><span id="title" onClick={
                    () => {
                        window.location.href = "/posts";
                    }
                }>Back</span></p>

                <Table className="postInfo-table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th>Descreption</th>
                            <th>Cataegory Name</th>
                            <th>Owner Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Size</th>
                            <th>Number of Room</th>
                            <th>Number of Owner</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{this.state.postInfo.descreption}</td>
                                <td>{this.state.postInfo.categoryName}</td>
                                <td>{this.state.postInfo.ownerName}</td>
                                <td>{this.state.postInfo.status}</td>
                                <td>{this.state.postInfo.price}</td>
                                <td>{this.state.postInfo.location}</td>
                                <td>{this.state.postInfo.size}</td>
                                <td>{this.state.postInfo.numberOfRoom}</td>
                                <td>{this.state.postInfo.ownerPhoneNumber}</td>

                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default withRouter(PostInfo);