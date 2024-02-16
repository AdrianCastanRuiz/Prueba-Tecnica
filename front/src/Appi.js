import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFilteredData = async (searchString) => {
  try {
    const response = await axios.get("http://localhost:3001/filter/", {
      params: {
        search: searchString,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos filtrados:", error);
    throw error;
  }
};
