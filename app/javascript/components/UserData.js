
/*const setUserData = (userID, initialUserName, bookmarks, appStartTime ) => {
    //const userID = localStorage.getItem('userID') ? localStorage.getItem('userID') : null
    //const initialUserName = localStorage.getItem('user') ? localStorage.getItem('user') : "Guest"
    //let bookmarks = localStorage.getItem('userBookmarks') ? localStorage.getItem('userBookmarks') : []
    //let appStartTime = localStorage.getItem('startTime')

    const UserData = {
        userID,
        initialUserName,
        bookmarks,
        appStartTime
    }

    return UserData;
}


export default setUserData;*/

class User {
    constructor(userID, initialUserName, bookmarks, appStartTime) {
        this.userID = userID;
        this.initialUserName = initialUserName;
        this.bookmarks = bookmarks;
        this.appStartTime = appStartTime;
    }
} 
export default User;