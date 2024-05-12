import axios from "axios";

export async function findAll() {
  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_API_URL}/posts`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
