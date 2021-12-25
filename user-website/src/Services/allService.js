import axios from "axios";

const HTTP_URL_CLIENT = "http://localhost:8080";
const token = localStorage.getItem("access_Token");
class AllServices {
    getToken(email, passwordHash) {
        return axios.post(`${HTTP_URL_CLIENT}/user/login`, { email, passwordHash })
    }
    signUpUser(firstName,lastName,email,passwordHash,phoneNumber,imageLink )
    {
      console.log(firstName+lastName+email+passwordHash+imageLink);
        return axios.post(`${HTTP_URL_CLIENT}/user/signup`,{firstName,lastName,email,passwordHash,phoneNumber,imageLink});
    }

    getAllCategory() {
        return axios.get(`${HTTP_URL_CLIENT}/GetCategory`, {
            headers: {
                'Authorization': token
            }
        });
    }

}
export default new AllServices();