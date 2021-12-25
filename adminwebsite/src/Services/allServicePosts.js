import axios from "axios";

const HTTP_URL_CLIENT = "http://localhost:8080";
const token = localStorage.getItem("access_Token");
class AllServicesPosts {
  getUserPost(id) {
    return axios.get(`${HTTP_URL_CLIENT}/user/GetOwnerPost/${id}`, {
      headers: {
        'Authorization': token
      }
    });
  }
  getPostInfo(id) {
    return axios.get(`${HTTP_URL_CLIENT}/user/GetPostInformation/${id}`, {
      headers: {
        'Authorization': token
      }
    });
  }
  getallPost() {
    return axios.get(`${HTTP_URL_CLIENT}/user/GetAllPost`, {
      headers: {
        'Authorization': token
      }
    });
  }
  getactivePost() {
    return axios.get(`${HTTP_URL_CLIENT}/user/GetActivePost`, {
      headers: {
        'Authorization': token
      }
    });
  }
  deletePostById(id) {
    return axios.delete(`${HTTP_URL_CLIENT}/user/DeletePost/${id}`, {
      headers: {
        'Authorization': token
      }
    });
  }
  changeStatusToAprove(postid) {
    return axios.get(`${HTTP_URL_CLIENT}/Admin/ChangeStatusToAprove/${postid}`, {
      headers: {
        'Authorization': token
      }
    });
  }
  changeStatusToDelete(postid) {
    return axios.get(`${HTTP_URL_CLIENT}/Admin/ChangeStatusToDelete/${postid}`, {
      headers: {
        'Authorization': token
      }
    });
  }
  changeStatusToPending(postid) {
    return axios.get(`${HTTP_URL_CLIENT}/Admin/ChangeStatusToPending/${postid}`, {
      headers: {
        'Authorization': token
      }
    });
  }
}
export default new AllServicesPosts();