const data = [{
    id: 1,
    title: 'The Godfather',
    year: 1978
},{
    id:2,
    title: '2001: A space Oddysey',
    year:1969
},{
    id:3,
    title:'Arrival',
    year:2017
}];

//Función sincróna
// const getData = () => {
//     return data;
// }

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    })
}

// Promise
// getData()
//     .then((data) => console.log(data));


// Con async 'n await

// async function fetchingData(params) {
//     const datas = await getData();
//     console.log(datas);
// }

// fetchingData();

// Más prolijo 
async function fetchingData(params) {
    try {
        const datas = await getData();
        console.log(datas);
    } catch (error) {
        console.log(err);
    }
}

fetchingData();