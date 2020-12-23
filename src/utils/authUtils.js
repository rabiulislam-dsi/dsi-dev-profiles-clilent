export function googleOauthSignIn() {
    const {
      REACT_APP_GOOGLE_AUTH_CLIENT_ID,
      REACT_APP_GOOGLE_AUTH_REDIRECT_URI
    } = process.env;
    // Google's OAuth 2.0 endpoint for requesting an access token
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    const form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
        'client_id': REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        'redirect_uri': REACT_APP_GOOGLE_AUTH_REDIRECT_URI,
        'response_type': 'token',
        'scope': 'https://www.googleapis.com/auth/userinfo.profile',
        'include_granted_scopes': 'true'
    };
  
    // Add form parameters as hidden input values.
    for (let p in params) {
      let input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
}


export function extractAuthResponseFromHash(url){
  return url
    .substring(1)
    .split("&")
    .reduce(function(result, item) {
      if (item) {
        var parts = item.split("=");
        result[parts[0]] = decodeURIComponent(parts[1]);
      }
      return result;
    }, {});
}