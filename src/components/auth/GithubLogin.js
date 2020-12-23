import {Button} from "react-bootstrap";

const {
    REACT_APP_GITHUB_AUTH_CLIENT_ID,
    REACT_APP_GITHUB_AUTH_REDIRECT_URI
  } = process.env;

const scopes = [
    "read:user","repo:status"
];

const githubAuthUrl = 'https://github.com/login/oauth/authorize';

function GithubLogin() {
    return (
        <Button
        href={`${githubAuthUrl}?client_id=${REACT_APP_GITHUB_AUTH_CLIENT_ID}&
        redirect_uri=${REACT_APP_GITHUB_AUTH_REDIRECT_URI}&scope=${scopes.join("%20")}`}
        >
        Login to Github
        </Button>      
    );
}

export default GithubLogin;