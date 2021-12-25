import { Button, Input } from "antd";
import React from "react";
import './category.css';
import { Table } from 'react-bootstrap';
import allServices from "../Services/allServices";
class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorys: []
    }
    this.deleteCategory = this.deleteCategory.bind(this);
  }
  deleteCategory(id) {
    allServices.deleteCategoryById(id).then(
      () => {
        this.setState({ categorys: this.state.categorys.filter(S => S.id !== id) });
      }
    );
  }
  componentDidMount() {
    allServices.getAllCategory().then(
      (Response) => {
        this.setState
          (
            {
              categorys: Response.data
            }
          );
        console.log(this.state.categorys);
      }
    );

  }
  render() {
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <p className="title-category"><icon id="icon"><img src="assets/assets/images/Category.png" alt="" /></icon><span id="title">category</span></p>
        <p className="title-logout-category"><icon id="icon"><img src="assets/assets/images/logout.png" alt="" /></icon><span id="title" onClick={
          () => {
            localStorage.clear();
            window.location.href = "/login";
          }
        }>Logout</span></p>
        <Input placeholder="Search..." id="category" />
        <Button type="default" id="btnCreate" onClick={
          () => {
            window.location.href = "/createcategory";
          }
        }>Create Category</Button>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <Table className="category-table table-bordered table-striped mb-0 " >
            <thead>
              <tr>

                <th scope="col" style={{ width: "60%" }}>Name Category</th>

                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.categorys.map(
                  category =>
                    <tr kay={category.id}>
                      <td>{category.name}</td>
                      <td>
                        <Button type="default" id="delete-category" onClick={
                          () => this.deleteCategory(category.id)
                        } ><img src="assets/assets/images/Delete.png" alt=" " /><span>Delete</span></Button>
                        <Button type="default" id="Update-category"><img src="assets/assets/images/user.png" alt=" " /><span>Update Information</span></Button>
                      </td>
                    </tr>
                )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Category;

