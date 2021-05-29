export default () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  socketPort: parseInt(process.env.SOCKET_PORT, 10) || 8080,
  jwt: {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshSignOptions: { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN },
  },
  facebook: {
    clientId: process.env.FB_APP_ID,
    clientSecret: process.env.FB_APP_SECRET,
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
  },
});
