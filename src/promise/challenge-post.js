import fetch from "node-fetch";
const API ='https://api.escuelajs.co/api/v1';

function postData(urlApia, data) {
    const response = fetch(urlApia, {
        method: 'POST',
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
    "title": "228",
    "price": 228,
    "description": "I am the product 228",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));