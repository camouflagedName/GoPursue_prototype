const local = '';
const staURL = 'https://test-go-pursue.herokuapp.com';
//const prodURL = 'https://go-pursue.herokuapp.com';

export const API_ROOT = process.env.NODE_ENV === 'development' ? local : staURL