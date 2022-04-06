import User from "../CareerApp/UserData";
import { API_ROOT } from "../packs/apiRoot";

const fetchData = (event, history, type, userData) => {
    event.preventDefault()
    let date = new Date()
    let month = date.getMonth() + 1
    let hour = date.getHours();
    let currentDate = `${month.toString()}/${date.getDate().toString()}/${date.getFullYear().toString()} at ${hour.toString()}:${date.getMinutes().toString()}:${date.getSeconds().toString()}`
    let startTime = Date.now()

    if (type === 'guest' || type === 'newUser') {
        const url = type === 'guest' 
        ? `${API_ROOT}/api/v1/users/create_guest`
        : `${API_ROOT}/api/v1/users/create`

        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: userData.user,
                    age: 0,
                    email: userData.email,
                    password: userData.password,
                    password_confirmation: userData.password,
                    created_on: currentDate,
                    num_logins: 1
                }
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Bad network response.");
            })
            .then(res => {
                const currentUser = new User(res.id, res.name, [], startTime)
                localStorage.setItem('userID', res.id)
                localStorage.setItem('user', res.name)
                localStorage.setItem('startTime', startTime)
                history.push({ pathname: '/main', state: { currentUser } })
            })
            .catch(error => console.log(error.message))
    }

    else if (type === "returnUser") {
        const url = `${API_ROOT}/api/v1/sessions/login`

        fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: userData.user,
                password: userData.password,
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                this.setState({ errorMessage: "Backend error: could not connect to controller. Please report this to system administrator." });
            })
            .then(user => {
                if (user.logged_in) {
                    const urlCount = `${API_ROOT}/api/v1/users/login_count/${user.user.id}`;

                    fetch(urlCount, {
                        method: 'PUT',
                        headers: {
                            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                            "Content-Type": 'application/json'
                        },
                        body: JSON.stringify({
                            user: {
                                num_logins: user.user.num_logins + 1,
                                last_login: currentDate
                            }
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json()
                            }
                        })
                        .then(() => {
                            const currentUser = new User(user.user.id, user.user.name, user.user.bookmarks, startTime)
                            localStorage.setItem('userID', user.user.id)
                            localStorage.setItem('user', user.user.name)
                            localStorage.setItem('userBookmarks', user.user.bookmarks);
                            localStorage.setItem('startTime', startTime)

                            history.push({ pathname: '/main', state: { currentUser } })
                        })
                }
                else {
                    this.setState({ errorMessage: user.error[0] })
                }
            });
    }
}

export default fetchData