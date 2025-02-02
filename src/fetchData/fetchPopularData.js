import axios from "axios";

const BASE_URL = "https://api.unsplash.com/photos";
const API_KEY = "6dCvwJHweCEVl6lBoW9aLciiH8ZffT9EivY4mJt_Tzs";

// Popüler fotoğrafları getiren fonksiyon
const fetchPopularData = async (page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        per_page: 16,
        client_id: API_KEY,
        page: page,
        orientation: "landscape",
        order_by: "popular", // Fotoğrafları popülerliğe göre sırala
      },
    });

    return response.data; // API'den gelen resimleri döndür
  } catch (error) {
    console.error("Popüler görseller yüklenirken hata oluştu:", error);
    return [];
  }
};

export default fetchPopularData;
