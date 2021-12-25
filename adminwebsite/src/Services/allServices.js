import axios from "axios";

const HTTP_URL_CLIENT = "http://localhost:8080";
const token = localStorage.getItem("access_Token");
class AllServices {
    getToken(email, passwordHash) {
        return axios.post(`${HTTP_URL_CLIENT}/user/login`, { email, passwordHash })
    }

    getAllCategory() {
        return axios.get(`${HTTP_URL_CLIENT}/GetCategory`, {
            headers: {
                'Authorization': token
            }
        });
    }

    deleteCategoryById(id) {
        return axios.delete(`${HTTP_URL_CLIENT}/Admin/DeleteCategory/${id}`, {
            headers: {
                'Authorization': token
            }
        });
    }

    CreateCategory(name, id) {
        return axios.post(`${HTTP_URL_CLIENT}/Admin/CreateCategory`, { name, id }, {
            headers: {
                'Authorization': token
            }
        });
    }
   updateCategory(categoryid,name) {
        return axios.post(`${HTTP_URL_CLIENT}/EditCategory/${categoryid}`, {categoryid,name }, {
            headers: {
                'Authorization': token
            }
        });
    }

}
export default new AllServices();