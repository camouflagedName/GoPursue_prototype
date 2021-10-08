const devURL = '';
const prodURL = 'http://gopursuecareer.com';

export const API_ROOT = process.env.NODE_ENV === 'development' ? devURL : prodURL;