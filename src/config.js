export const oktaConfig = {
  issuer: `https://dev-95881651.okta.com/oauth2/default`,
  clientId: "0oa7p5y1gbWh5i1QK5d7",
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true,
};
