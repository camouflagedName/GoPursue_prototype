const devURL = '';
const prodURL = 'https://murmuring-ridge-43281.herokuapp.com/';

export const API_ROOT = process.env.NODE_ENV === 'development' ? devURL : prodURL;