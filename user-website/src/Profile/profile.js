import { Form } from "antd";
import React from "react";
import allServiceUsers from "../Services/allServiceUsers";
import './profile.css';
const user_id = localStorage.getItem("Id");

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            user: {}
        }
    }

    componentDidMount() {
        allServiceUsers.getUserById(user_id).then(
            (res) => {
                this.setState({ user: res.data });
                console.log(this.state.user);

            }
        );
    }
    render() {
        return (
            <>
                <div className="welcome-area">

                    <Form id="forminfo">
                        <Form.Item>
                            <img className="img-pro" src={`assest/img/${this.state.user.imageLink}`} alt=" " />

                        </Form.Item>
                        <Form.Item style={{ color: "#fff", fontStyle: "italic", fontSize: "16px" }}>
                            <label style={{ color: "#fff", fontStyle: "italic", fontSize: "16px" }} >Name : </label> {this.state.user.firstName} {this.state.user.lastName}

                        </Form.Item>

                        <Form.Item style={{ color: "#fff", fontStyle: "italic", fontSize: "16px" }}  >
                            <label style={{ color: "#fff", fontStyle: "italic", fontSize: "16px" }} >Email :</label> {this.state.user.email}
                        </Form.Item>
                        <Form.Item style={{ color: "#fff", fontStyle: "italic", fontSize: "16px" }} >
                            <label style={{ color: "#fff", fontStyle: "italic", fontSize: "16px" }} >Phone Number : 0</label>{this.state.user.phoneNumber}
                        </Form.Item>
                    </Form>
                </div>
            </>
        );

    }
}
export default Profile;