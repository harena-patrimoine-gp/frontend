import axios from 'axios';

const api = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/tovomihajajonathanRAJAONARISON/harena/1.0.0',
});

export default api;