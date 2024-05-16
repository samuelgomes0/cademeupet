import axios from "axios";

export async function findByPetName(name) {
  if (!name) {
    console.error("Pet name is required");
    return null;
  }

  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_API_URL}/posts`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    params: {
      name,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts by pet name:", error);
    return null;
  }
}
