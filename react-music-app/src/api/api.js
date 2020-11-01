import axios from 'axios';

const API_KEY = 'e67156ee4fmshe6ed6eb72e9047fp148839jsn932934eb6714';

const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers: { 'X-RapidAPI-Key': API_KEY }
})

export function getAlbums(search = 'paster') {
    const albums = request.get(`search?q=${search}`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
    return albums;
}

export function getAlbum(id) {
    const album = request.get(`album/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return album;
}

export function getFavorites() {
    const albums = localStorage.getItem('favorites');
    return albums;
}