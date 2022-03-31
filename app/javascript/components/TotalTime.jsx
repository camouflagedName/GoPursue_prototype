import { API_ROOT } from '../packs/apiRoot';

const totalTime = (startTime, user) => {
    if(user) {
        const url = `${API_ROOT}/api/v1/users/time/${user}`
        let endTime = Date.now()
        let elapsedTime = (endTime - startTime)/60000


        fetch(url, {
            method: 'PUT',
            headers:{
                "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({avg_time: elapsedTime})
        })
        .then(response => {
            if(response.ok) return response.json()
            throw new Error("Bad network response.")
        })
        .catch(error => error.message)
    }
}

export default totalTime