import axios from "axios";

const PRIVATE_KEY = "33457552-f72b8f2d874a669f815eb264f";

const fetchImages = async (query, page, key = PRIVATE_KEY) => {
    const { data } = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
        { withCredentials: false }
    );

    return data;
};

export default fetchImages;
