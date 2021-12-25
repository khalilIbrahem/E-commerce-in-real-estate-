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

  getactivePost() {
    return axios.get(`${HTTP_URL_CLIENT}/user/GetActivePost`, {
      headers: {
        'Authorization': token
      }
    });
  }
 
  createPost(cataegoryid,descreption,direction,location,nFloor,numberOfRoom,offer,ownerid,price,size,imageUrl){
    return axios.post(`${HTTP_URL_CLIENT}/user/CraetePost`,{cataegoryid,descreption,direction,location,nFloor,numberOfRoom,offer,ownerid,price,size,imageUrl}, {
      headers: {
        'Authorization': token
      }
    });
  }
  updatepost(postid,cataegoryid, descreption, direction, location, nFloor, numberOfRoom, offer, ownerid, price, size, imageUrl){
    return axios.put(`${HTTP_URL_CLIENT}/user/UpdatePost/${postid}`,{postid},{cataegoryid, descreption, direction, location, nFloor, numberOfRoom, offer, ownerid, price, size, imageUrl}, {
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
  
}
export default new AllServicesPosts();