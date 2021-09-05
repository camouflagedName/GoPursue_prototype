const devURL = '';
const prodURL = 'https://uncover-edu.herokuapp.com';

export const API_ROOT = process.env.NODE_ENV === 'development' ? devURL : prodURL;