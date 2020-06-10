const remoteURL = 'http://localhost:8088'

export default {
    getItem(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
    },
    getUser(username, password) {
      return fetch(`${remoteURL}/users?username=${username}&password=${password} `).then(e => e.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    },
    getCompleted(resource) {
      return fetch(`http://localhost:8088/${resource}?completed=false`).then(e => e.json())
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
     update(resource, obj) {
      return fetch(`${remoteURL}/${resource}/${obj.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(data => data.json());
    },
    delete(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      }).then(result => result.json())
    },
 }