const devURL = '';
const prodURL = 'https://test-go-pursue.herokuapp.com';

export const API_ROOT = process.env.NODE_ENV === 'development' ? devURL : prodURL;