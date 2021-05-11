export default () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  socketPort: parseInt(process.env.SOCKET_PORT, 10) || 8080,
  mongoose: {
    uri: process.env.MONGODB_URI,
  },
});
