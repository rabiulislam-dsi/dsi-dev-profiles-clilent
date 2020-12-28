import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {extractAuthResponseFromHash} from '../utils/authUtils';
import GithubLogin from '../components/auth/GithubLogin';

const params = (new URL(document.location)).searchParams;
const code = params.get("code");
const {access_token} = extractAuthResponseFromHash(document.location.hash);

function AuthRedirect() {
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
                }
                setSuccess("We are almost done. Now, please login with github");
            })
            .catch(err => {
                setLoading(false);
                setError("Authorization failed");
            });
    }

    const handleGithubAuthCallback = () => {
        //TODO:// get dev info and send those to backend along with auth code
        // axios.post('/demo', {
        //     code: code
        // }).
        // then(res=>{
        //     setLoading(false);
        //     setSuccess("Sign up complete. Go to home page");
        // })
        // .catch(err=>{
        //     setLoading(false);
        //     setError("Authorization failed");
        // });
    }

    const NextContent = () => {
        if (authServer === "google") {
            return <GithubLogin/>
        }
        return <a href="/">Home</a>
    }

    return (
        <div className="container">
            <div className="page-center">
                {loading && (<p>Please wait..</p>)}
                {!loading && err}
                {!loading && success}
                {!loading && !err && <NextContent/>}
            </div>
        </div>
    );
}

export default AuthRedirect;