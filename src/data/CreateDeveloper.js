import axios from './axios/Axios';

function CreateDeveloper(user, callback) {
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
            console.log(response.data.developer);
            callback(response.data.developer.id, user)
        })
        .catch(error => {
            console.log(error);
        })
}

export default CreateDeveloper;