import axios from 'axios';

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "6dCvwJHweCEVl6lBoW9aLciiH8ZffT9EivY4mJt_Tzs";

const fetchData = async (seachQuerry, page = 1) => {
    const params = {
        query: seachQuerry,
        // query: 'apple',
        per_page: 16,
        client_id: API_KEY,
        page: page,
        orientation: "landscape",
        order_by: "relevant",
    };
    try{
        const response = await axios.get(BASE_URL, {params});
        const images = response.data.results;
        return images;
    }catch{
        console.log(error)
    }
};
export default fetchData;