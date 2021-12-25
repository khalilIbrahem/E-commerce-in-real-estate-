import { Button, Input } from "antd";
import React from "react";
import allService from "../Services/allService";
import allServicePosts from "../Services/allServicePosts";
import './createpost.css';
class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Category: []
        }
    }
    componentDidMount() {
        allService.getAllCategory().then(
            (res) => {
                this.setState({ Category: res.data });

                console.log(this.state.Category);
            }

        );
    }
    _createOption() {
        let option = [], catogry = this.state.Category;

        for (let i = 0; i < catogry.length; i++) {
            option.push(

                <option value={catogry[i].id}>{catogry[i].name}</option>
            );




        }
        return option;

    }

    render() {
        let cataegoryid = '';
        let descreption = '';
        let direction = '';
        let location = '';
        let imageUrl = '';
        let nFloor = '';
        let numberOfRoom = '';
        let offer = '';
        let price = '';
        let size = '';
        let ownerid = localStorage.getItem('Id');

        return (
            <>

                <div className="welcome-area">
                    <div className="post-container">
                        <h1 id="ptitle" style={{ color: "#ffff" }}>Create Post</h1>
                        <br></br>
                        <table className="post-table">
                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Cataegory Name</label>

                                </td>

                                <td className="post-table-secound-Colum">
                                    <select style={{ width: "300px", height: "35px", borderRadius: "30px" }} onChange={
                                        (e) => {
                                            cataegoryid = e.target.value;

                                        }
                                    }  >
                                        {this._createOption()}
                                    </select>
                                </td>


                            </tr>
                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Descreption</label>

                                </td>
                                <td className="post-table-secound-Colum">
                                    <Input placeholder="descreption" style={{ borderRadius: "30px" }}
                                        onChange={(event) => { descreption = event.target.value; }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Direction</label>
                                </td>
                                <td className="post-table-secound-Colum">
                                    <select style={{ width: "300px", height: "35px", borderRadius: "30px" }}
                                        onChange={(event) => {
                                            direction = event.target.value;
                                            console.log(direction);
                                        }}
                                    >
                                        <option> </option>
                                        <option>South</option>
                                        <option>North</option>
                                        <option>East</option>
                                        <option>West</option>
                                        <option>South_East</option>
                                        <option>South_West</option>
                                        <option>North_East</option>
                                        <option>North_West</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Location</label>
                                </td>

                                <td className="post-table-secound-Colum">
                                    <Input placeholder="location" style={{ borderRadius: "30px" }}
                                        onChange={(event) => { location = event.target.value; }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Number of floor</label>
                                </td>
                                <td className="post-table-secound-Colum">
                                    <Input type="number" placeholder="nFloor" style={{ borderRadius: "30px" }}
                                        onChange={(event) => { nFloor = event.target.value; }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Number Room</label>
                                </td>
                                <td className="post-table-secound-Colum">
                                    <Input type="number" placeholder="numberOfRoom" style={{ borderRadius: "30px" }}
                                        onChange={(event) => {
                                            numberOfRoom = event.target.value;
                                            console.log(numberOfRoom);
                                        }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Offer</label>
                                </td>
                                <td className="post-table-secound-Colum">
                                    <select placeholder="offer" style={{ width: "300px", height: "35px", borderRadius: "30px" }}
                                        onChange={(event) => {
                                            offer = event.target.value;
                                            console.log(offer);
                                        }}
                                    >
                                        <option> </option>
                                        <option>ForSale</option>
                                        <option>ForAlocate</option>

                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Size</label>
                                </td>
                                <td className="post-table-secound-Colum">
                                    <Input type="number" placeholder="size" style={{ borderRadius: "30px" }}
                                        onChange={(event) => {
                                            size = event.target.value;
                                            console.log(size);
                                        }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Price</label>
                                </td>
                                <td className="post-table-secound-Colum">
                                    <Input type="number" placeholder="price" style={{ borderRadius: "30px" }}
                                        onChange={(event) => {
                                            price = event.target.value;
                                            console.log(price);
                                        }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="post-table-first-Colum">
                                    <label>Image</label>
                                </td>
                                <td>
                                    <input type="file"
                                        onChange={
                                            (e) => {
                                                imageUrl = e.target.files[0].name;
                                                console.log(imageUrl);
                                            }}
                                    />
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
                                                allServicePosts.createPost(cataegoryid, descreption, direction, location, nFloor, numberOfRoom, offer, ownerid, price, size, imageUrl).then(
                                                    (response) => {
                                                        console.log(response.data);
                                                    }
                                                );
                                                window.location.href = "/mypost";
                                            }
                                        }
                                    >
                                        <p>Save</p></Button>
                                </td>
                                <td>
                                    <Button id="bac-button" type="default"
                                        onClick={
                                            () => window.location.href = "/mypost"
                                        }
                                    >
                                        <p>back</p></Button>
                                </td>
                            </tr>

                        </table>

                    </div>
                </div>
            </>
        );
    }
}


export default CreatePost;