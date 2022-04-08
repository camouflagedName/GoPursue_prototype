const local = '';

//development to staging
const testURL = 'https://test-go-pursue.herokuapp.com';
export const API_ROOT = process.env.NODE_ENV === 'development' ? local : testURL

//staging to production
//const prodURL = 'https://go-pursue.herokuapp.com';
//export const API_ROOT = process.env.NODE_ENV === 'development' ? local : prodURL