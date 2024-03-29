import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {extractAuthResponseFromHash} from '../utils/authUtils';
import GithubLogin from '../components/auth/GithubLogin';
import {UserContext} from "../context/UserContext";
import {Spinner} from "react-bootstrap";
import RegistrationSuccess from "../components/auth/RegistrationSuccess";

const params = (new URL(document.location)).searchParams;
const code = params.get("code");
const {access_token} = extractAuthResponseFromHash(document.location.hash);

function AuthRedirect() {
    const {user, setUser} = useContext(UserContext);
    const {authServer} = useParams();
    const [success, setSuccess] = useState(null);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authServer === "google") {
            handleGoogleAuthCallback();
        } else {
            handleGithubAuthCallback();
        }
    }, []);

    const handleGoogleAuthCallback = () => {
        axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            params: {
                access_token: access_token
            }
        })
            .then(res => {
                setLoading(false);
                if (res.data.hd !== "dsinnovators.com") {
                    setError("Please login with your official email address");
                } else {
                    const newUser = {
                        ...user,
                        name: res.data.name,
                        email: res.data.email
                    };
                    setUser(newUser);
                    localStorage.setItem('user',JSON.stringify(newUser));
                }
                setSuccess("We are almost done. Now, please login with github");
            })
            .catch(err => {
                setLoading(false);
                setError("Authorization failed");
            });
    }

    const handleGithubAuthCallback = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        const url = "/api/developers/" + user.id + "/github/code";
        axios({
            method: 'post',
            url: url,
            data: {
                code: code
            }
        })
            .then((response) => {
                console.log(response);
                setLoading(false);
                setSuccess("Registration Successful");
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setError("Authorization failed");
            });
    }

    const NextContent = ({success, error}) => {
        if(error !== null) return {error}
        else {
            if (authServer === "google") {
                return <GithubLogin message={success}/>
            }
            return <RegistrationSuccess message={success}/>
        }
    }

    return (
        <div className="container">
            <div className="page-center">
                {loading && (<>
                    <Spinner animation="border" variant="primary"/>
                </>)}
                {!loading && <NextContent success={success} error={err}/>}
            </div>
        </div>
    );
}

export default AuthRedirect;