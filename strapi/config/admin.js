module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',`tobeModified`),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',`tobeModified`),
  },
});
