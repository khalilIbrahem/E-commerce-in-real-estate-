import axios from "axios";

const HTTP_URL_CLIENT = "http://localhost:8080";
const token = localStorage.getItem("access_Token");
class AllServicesUSers {

  getAllUsers() {
    return axios.get(`${HTTP_URL_CLIENT}/Admin/GetAllusers`, {
      headers: {
        'Authorization': token
      }
    });
  }
  getUserById(id) {
    return axios.get(`${HTTP_URL_CLIENT}/Admin/GetuserDetalis/${id}`, {
      headers: {
        'Authorization': token
      }
    });
  }

  deleteUser(id) {
    return axios.delete(`${HTTP_URL_CLIENT}/Admin/DeleteUser/${id}`, {
      headers: {
        'Authorization': token
      }
    });
  }

}
export default new AllServicesUSers();