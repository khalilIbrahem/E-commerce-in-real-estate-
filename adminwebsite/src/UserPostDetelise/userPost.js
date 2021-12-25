import React from 'react';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import allServicePosts from '../Services/allServicePosts';
import './userpost.css';



class UserPostDetelise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            post: []
        }
    }

    componentDidMount() {
        allServicePosts.getUserPost(this.state.id).then(
            (res) => {
                this.setState({ post: res.data });
                console.log(this.state.post);
            }

        );
    }

    render() {

        return (
            <div className="site-layout-background-post" >
                <p className="title-post"><span id="title">User Post Detelise</span></p>
                <p className="title-back"><span id="title" onClick={
                    () => {
                        window.location.href = "/users";
                    }
                }>Back</span></p>

                <Table className="post-table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th>Descreption</th>
                            <th>Number of Room</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Size</th>
                            <th>Status</th>
                            <th>nFloor</th>
                            <th>Cataegoryid</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.post.map(
                                userpost =>
                                    <tr kay={userpost.id}>
                                        <td>{userpost.descreption}</td>
                                        <td>{userpost.numberOfRoom}</td>
                                        <td>{userpost.price}</td>
                                        <td>{userpost.location}</td>
                                        <td>{userpost.size}</td>
                                        <td>{userpost.status}</td>
                                        <td>{userpost.nFloor}</td>
                                        <td>{userpost.cataegoryid}</td>
                                    </tr>


                            )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default withRouter(UserPostDetelise);