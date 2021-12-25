import React from 'react';
import { Button, Input } from "antd";
import './create.css';
import allServices from '../Services/allServices';
class CreateNewCategory extends React.Component {

    render() {
        let name = '';
        let id = '';
        return (
            <div class="category">
                <div class="category-continare">
                    <h1 className="category-title">Create Category Page</h1>
                    <table className="table-category">

                        <tr>
                            <td className="first-col">
                                <label>Name</label>
                            </td>
                            <td className="second-col">
                                <Input type="text" placeholder="Name" style={{ borderRadius: "30px" }} onChange={
                                    (event) => {
                                        name = event.target.value;
                                    }
                                } />
                            </td>
                        </tr>
                        <tr><td><br></br></td></tr>
                    </table>
                    <Button id="btncate" onClick={
                        () => {
                            allServices.CreateCategory(name, id).then(
                                (res) => { console.log(res.data); }
                            );
                            window.location.href = "/category";
                        }
                    }>Save</Button>
                      <Button id="btnback" onClick={
                        () => {
                            window.location.href = "/category";
                        }
                    }>back</Button>
                </div>
            </div>
        );
    }
}
export default CreateNewCategory;