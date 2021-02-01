// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
        clientId: "<SPA App ID>",
        authority: "https://login.microsoftonline.com/<tenant>.onmicrosoft.com",
        redirectUri: "http://localhost:3000/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {	
                    return;	
                }
                switch (level) {	
                    case msal.LogLevel.Error:	
                        console.error(message);	
                        return;	
                    case msal.LogLevel.Info:	
                        console.info(message);	
                        return;	
                    case msal.LogLevel.Verbose:	
                        console.debug(message);	
                        return;	
                    case msal.LogLevel.Warning:	
                        console.warn(message);	
                        return;	
                }
            }
        }
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: ["<web API App ID>/.default"]
};


const apiConfig = {
    myAPIEndpoint: "https://bhtestapi123.azurewebsites.net/WeatherForecast"
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
    scopes: ["<web API App ID>/.default"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};
