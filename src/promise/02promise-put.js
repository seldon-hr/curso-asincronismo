import fetch from "node-fetch";
const API ='https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}


const data = {
    "title": "I'm the number one",
    "price": 1,
    "description": "It's a proff about I'm the number one",
    "categoryId": 1,
    "images": ["https://i.imgur.com/26h9IpE.png"]
}

postData(`${API}/products/2`, data)
    .then(response => response.json())
    .then(data => console.log(data));