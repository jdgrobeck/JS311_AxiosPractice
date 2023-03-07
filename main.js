console.log("Hello World")


const axios = require("axios");

const getContact = () => {

    try {
        const res = axios.get('https://randomuser.me/api/')
        .then(res => { console.log(res.data.results)})

    } catch(error) {
        console.log("ERROR", error)
    } finally {
        //always executed
    }


}

console.log(getContact())

// https://swapi.dev/api/people/1 //but I want to pick different numbers

const getStarWarsPerson = (id) => {
    try {
        const res = axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => { console.log(res.data)})

    } catch(error) {
        console.log("ERROR", error)
    } finally {
    
    }

}

console.log(getStarWarsPerson(1))

const getStarWarsPerson2 = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => { console.log(res.data)})

    } catch(error) {
        console.log("ERROR", error)
    } finally {
    
    }

}

console.log(getStarWarsPerson2(5))