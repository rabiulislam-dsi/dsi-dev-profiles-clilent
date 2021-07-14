import axios from './axios/Axios';
import {errorHandler} from "../utils/errorUtils";

function CreateDeveloper(user, callback, redirect) {
    axios({
        method: 'post',
        url: '/api/developers',
        data: {
            email: user.email,
            fullName: user.name,
            designation: user.designation,
            employmentDate: user.joiningDate
        }
    })
        .then((response) => {
            callback(response.data.developer.id, user);
        })
        .then(() => {
            redirect();
        })
        .catch(error => {
            errorHandler(error);
        })
}

export default CreateDeveloper;