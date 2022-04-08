const local = '';
const testURL = 'https://test-go-pursue.herokuapp.com';
const prodURL = 'https://go-pursue.herokuapp.com';

export const API_ROOT = process.env.NODE_ENV === 'development' ? local : process.env.NODE_ENV === 'test' ? testURL : prodURL