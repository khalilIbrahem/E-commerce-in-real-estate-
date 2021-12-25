import React, { Component } from "react";
import { Button, Input } from "antd";
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import allServiceUsers from "../Services/allServiceUsers";
import './users.css';
class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
    this.deleteUser = this.deleteUser.bind(this);
  }
  deleteUser(id) {
    allServiceUsers.deleteUser(id).then(
      () => {
        this.setState({ users: this.state.users.filter(S => S.id !== id) });
      }
    );
  }
  componentDidMount() {
    allServiceUsers.getAllUsers().then(
      (Response) => {
        this.setState
          (
            {
              users: Response.data

            }
          );
        console.log(this.state.users);
      }
    );

  }
  viewUserDetils(id) {
    this.props.history.push(`/userinfo/${id}`);
  }
  render() {
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <p className="title-users"><icon id="icon"><img src="assets/assets/images/pepole2.png" alt="" /></icon><span id="title">Users</span></p>
        <p className="title-logout-users"><icon id="icon"><img src="assets/assets/images/logout.png" alt="" /></icon><span id="title" onClick={
          () => {
            localStorage.clear();
            window.location.href = "/login";
          }
        }>Logout</span></p>
        <Input placeholder="Search..." id="users" />
        <Table className="users-table table-bordered table-striped mb-0 " >
          <thead>
            <tr>

              <th scope="col" style={{ width: "60%" }}>Full Name</th>
              <th scope="col">Display</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(
                user =>
                  <tr kay={user.id}>
                    <td>{user.firstName} {user.lastName}</td>
                    <td><Button type="default" id="view-user" onClick={
                      () => this.viewUserDetils(user.id)
                    }>Display Information</Button></td>
                    <td><Button type="default" id="delete-user" onClick={
                      () => this.deleteUser(user.id)
                    }>Delete</Button></td>
                  </tr>
              )}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default withRouter(Users);

