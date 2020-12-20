import Cookies from 'js-cookie';
import axios from 'axios'

function GetToken() {
    const token = Cookies.get('token');
    if(token !== undefined) {
        return token;
    } else {
        axios({
            method: 'post',
            url: '/api/token',
            auth: {
                username: process.env.REACT_APP_BACKEND_CLIENT_ID,
                password: process.env.REACT_APP_BACKEND_CLIENT_SECRET
            }
        })
            .then(response => {
                Cookies.set('token', response.data.token, {
                    expires: new Date(response.data.expiresAt),
                    sameSite: 'strict'
                });
                return response.data.token;
            })
            .catch(error => {
                console.error(error);
            })
    }
}

export default GetToken;