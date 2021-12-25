import { Input, Button } from "antd";
import React from "react";
import { Table } from 'react-bootstrap';
import allServicePosts from "../Services/allServicePosts";
import { withRouter } from 'react-router-dom';
import './posts.css';
class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      posts: []

    }
    this.changeStatusAprove = this.changeStatusAprove.bind(this);
    this.changeStatusPending = this.changeStatusPending.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  deletePost(id) {
    allServicePosts.deletePostById(id).then(
      () => {
        this.setState({
          posts: this.state.posts.filter(S => S.id !== id)

        });


      }
    )
  }
  changeStatusAprove(postid) {
    allServicePosts.changeStatusToAprove(postid).then(
      (res) => {
        this.setState({
          posts: this.state.posts.map(S => S.id === postid)
        });
      }
    );
  }

  changeStatusPending(postid) {
    allServicePosts.changeStatusToPending(postid).then(
      (res) => {
        this.setState({
          posts: this.state.posts.map(S => S.id === postid)
        });
      }
    );
  }
  componentDidMount() {
    allServicePosts.getallPost().then(
      (res) => {
        this.setState(
          {
            posts: res.data
          }
        );

      }
    )

  }
  viewPostInfo(id) {
    this.props.history.push(`/postInfo/${id}`);
  }
  render() {
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <p className="title-posts"><icon id="icon"><img src="assets/assets/images/post.png" alt="" /></icon><span id="title">Posts</span></p>
        <p className="title-logout-posts"><icon id="icon"><img src="assets/assets/images/logout.png" alt="" /></icon><span id="title" onClick={
          () => {
            localStorage.clear();
            window.location.href = "/login";
          }
        }>Logout</span></p>
        <Input placeholder="Search..." id="posts" />
        <Table className="posts-table table-bordered table-striped mb-0 " >
          <thead>
            <tr>

              <th scope="col">Descreption</th>
              <th scope="col">Status</th>
              <th scope="col">price</th>
              <th scope="col">Display</th>
              <th scope="col">Actions</th>
              <th scope="col">Change Status Post</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.posts.map(
                post =>
                  <tr >
                    <td>{post.descreption}</td>
                    <td>{post.status}</td>
                    <td>{post.price}</td>
                    <td><Button type="default" id="view-post-info" onClick={
                      () => this.viewPostInfo(post.id)
                    }>Display Information</Button></td>
                    <td><Button type="default" id="delete-post" onClick={
                      () => {
                        this.deletePost(post.id)
                        console.log(post.id);
                      }}>Delete</Button></td>
                    <td><Button type="default" id="aprove-status" onClick={
                      () => {
                        this.changeStatusAprove(post.id)
                         window.location.reload();
                        console.log(post.id);
                      }}>
                      Approve
                    </Button>

                      <Button type="default" id="pending-status" onClick={
                        () => {
                          this.changeStatusPending(post.id)
                           window.location.reload();
                          console.log(post.id);
                        }}>
                        Panding
                      </Button>
                    </td>
                  </tr>
              )}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default withRouter(Posts);

