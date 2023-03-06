import axios from "axios";

const PRIVATE_KEY = "33457552-f72b8f2d874a669f815eb264f";

// axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImages = async (query, page, key=PRIVATE_KEY) => {
    const { data } = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return data;
};

// function fetchImages(query, page, key = PRIVATE_KEY) {
//     return fetch(
//         `https://pixabay.com/api/?q=${query}&page=${page}&key=${PRIVATE_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     ).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         return Promise.reject(new Error(`No images for query: ${query}`));
//     });
// }

export default fetchImages;
