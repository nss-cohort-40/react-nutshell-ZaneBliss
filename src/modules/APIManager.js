const remoteURL = 'http://localhost:8088'

export default {
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    },
    post(resource, obj) {
        return fetch(`${remoteURL}/${resource}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then((data) => data.json()); 
    },
 }