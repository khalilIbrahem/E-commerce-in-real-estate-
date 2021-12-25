import { Button, Input } from "antd";
import React from "react";
import './login.css';
import allServices from "../Services/allServices";
class Login extends React.Component {
    render() {
        let email = '';
        let passwordHash = '';
        return (
            <div className="welcom-area">
                <div className="login-continare">
                    <h1 className="login-title">LOGIN PAGE</h1>
                    <table className="table-login">
                        <tr>
                            <td className="first-col-table-login">
                                <label>Email</label>
                            </td>
                            <td className="second-col-table-login">
                                <Input type="text" placeholder="email" style={{ borderRadius: "30px" }} onChange={
                                    (event) => {
                                        email = event.target.value;
                                    }} />
                            </td>
                        </tr>
                        <tr><td><br />
                            <br /></td></tr>
                        <tr>
                            <td className="first-col-table-login">
                                <label>Password</label>
                            </td>
                            <td className="second-col-table-login">
                                <Input.Password type="password" placeholder="password" style={{ borderRadius: "30px" }} onChange={
                                    (event) => {
                                        passwordHash = event.target.value;
                                    }} />
                            </td>
                        </tr>
                        <tr><td><br></br></td></tr>
                    </table>
                    <Button id="button-login" onClick={
                        () => {
                            allServices.getToken(email, passwordHash).then(
                                (response) => {
                                    console.log(response.data);
                                    var tokenWithId = response.data.token;
                                    var token = tokenWithId.split("!");
                                    localStorage.setItem('access_Token', `Bearer ` + token[0]);
                                    localStorage.setItem('Id', token[1]);
                                    localStorage.setItem('user_Id', token[2])
                                    if (localStorage.getItem('user_Id') === '1') {
                                        window.location.href = "/homesidebar";
                                    } else {
                                        localStorage.clear();
                                        window.location.href = "/login";
                                    }
                                });
                        }

                    }>Sign in</Button>

                </div>
            </div>


        );
    }
}
export default Login;