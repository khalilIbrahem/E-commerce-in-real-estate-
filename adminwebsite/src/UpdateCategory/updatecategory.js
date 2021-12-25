import React from 'react';
import { Button, Input } from "antd";
class UpdateCategory extends React.Component {

    render() {
        ;
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
                                <Input type="text" placeholder="Name" style={{ borderRadius: "30px" }} />
                            </td>
                        </tr>
                        <tr><td><br></br></td></tr>
                    </table>
                    <Button id="btncate">Save</Button>
                </div>
            </div>
        );
    }
}
export default UpdateCategory;