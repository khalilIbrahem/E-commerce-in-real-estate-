import { Button, Input } from "antd";
import React from "react";
import allService from "../Services/allService";
import './signup.css';
function SingUp() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let imageLink = '';
    let passwordHash = '';
    let phoneNumber = '';
    return (
        <>

            <div className="welcome-area">
                <div className="singup-container">
                    <h1 className="singup-title">Sign Up</h1>
                    <br></br>
                    <table className="singup-table">
                        <tr>
                            <td className="singup-table-first-Colum">
                                <label>First Name</label>

                            </td>
                            <td className="singup-table-secound-Colum">
                                <Input placeholder="first Name" style={{ borderRadius: "30px" }} onChange={(event) => { firstName = event.target.value; }} />
                            </td>
                        </tr>
                        <tr>
                            <td><br></br></td>
                        </tr>
                        <tr>
                            <td className="singup-table-first-Colum">
                                <label>Last Name</label>
                            </td>
                            <td className="singup-table-secound-Colum">
                                <Input placeholder="last Name" style={{ borderRadius: "30px" }} onChange={(event) => { lastName = event.target.value; }} />
                            </td>
                        </tr>
                        <tr>
                            <td><br></br></td>
                        </tr>
                        <tr>
                            <td className="singup-table-first-Colum">
                                <label>Email</label>
                            </td>

                            <td className="singup-table-secound-Colum">
                                <Input placeholder="email" style={{ borderRadius: "30px" }} onChange={(event) => { email = event.target.value; }} />
                            </td>
                        </tr>
                        <tr>
                            <td><br></br></td>
                        </tr>
                        <tr>
                            <td className="singup-table-first-Colum">
                                <label>Password</label>
                            </td>
                            <td className="singup-table-secound-Colum">
                                <Input.Password type="text" placeholder="password Hash" style={{ borderRadius: "30px" }} onChange={(event) => { passwordHash = event.target.value; }} />
                            </td>
                        </tr>
                        <tr>
                            <td><br></br></td>
                        </tr>
                        <tr>
                            <td className="singup-table-first-Colum">
                                <label>Phone Number</label>
                            </td>
                            <td className="singup-table-secound-Colum">
                                <Input type="text" placeholder="Phone Number" style={{ borderRadius: "30px" }} onChange={(event) => { phoneNumber = event.target.value; }} />
                            </td>
                        </tr>
                        <tr>
                            <td><br></br></td>
                        </tr>
                        <tr>
                            <td className="singup-table-first-Colum">
                                <label>Image</label>
                            </td>
                            <td>
                                <input type="file" onChange={
                                    (e) => {
                                        imageLink = e.target.files[0].name;
                                        console.log(imageLink);
                                    }} />
                            </td>
                        </tr>
                        <tr>
                            <td><br></br></td>
                        </tr>
                        <tr>
                            <td>
                                <Button id="signup-button" type="default"
                                    onClick={
                                        () => {
                                            allService.signUpUser(firstName, lastName, email, passwordHash, phoneNumber, imageLink).then(
                                                (response) => {
                                                    console.log(response.data);
                                                }
                                            );
                                            // window.location.href = "/login";
                                        }
                                    }
                                >
                                    <p>Register</p></Button>
                            </td>
                        </tr>

                    </table>

                </div>
            </div>
        </>
    );
}


export default SingUp;