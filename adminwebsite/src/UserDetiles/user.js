import React from 'react';
import { Button } from 'antd';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import allServiceUsers from '../Services/allServiceUsers';
import './user.css';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        allServiceUsers.getUserById(this.state.id).then(
            (res) => {
                this.setState({ user: res.data });

            }
        );
    }
    viewPostOwner(id) {
        this.props.history.push(`/viewuserpost/${id}`);
    }
    render() {

        return (
            <div className="site-layout-background-user" >
                <p className="title-user"><span id="title">Users</span></p>
                <p className="title-back"><span id="title" onClick={
                    () => {
                        window.location.href = "/users";
                    }
                }>Back</span></p>

                <Table className="user-table table-bordered table-striped mb-0 ">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Owner Type</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            <tr>
                                <td>{this.state.user.firstName}</td>
                                <td>{this.state.user.lastName}</td>
                                <td>{this.state.user.email}</td>
                                <td>{this.state.user.ownerType}</td>
                                <td>{this.state.user.phoneNumber}</td>
                                <td>
                                    <Button type="default" id="view-posts" onClick={
                                        () => this.viewPostOwner(this.state.user.id)
                                    } >Display Posts</Button>
                                </td>
                            </tr>


                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default withRouter(UserInfo);