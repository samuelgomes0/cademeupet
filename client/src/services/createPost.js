import axios from "axios";

export async function createPost({
  age,
  breed,
  lastSeenAt,
  lastSeenOn,
  name,
  picture,
  status,
  type,
}) {
  if (!name || !lastSeenOn || !type || !picture || !picture.length) {
    throw new Error("Missing required fields");
  }

  let formattedDate;
  try {
    formattedDate = new Date(lastSeenOn).toISOString();
  } catch (error) {
    console.error("Invalid date format for lastSeenOn:", lastSeenOn);
    throw new Error("Invalid date format");
  }

  const apiUrl = import.meta.env.VITE_API_URL || "https://default-api-url.com";

  const options = {
    method: "POST",
    url: `${apiUrl}/posts`,
    data: {
      age,
      breed: breed || "Sem raça definida",
      lastSeenAt,
      lastSeenOn: formattedDate,
      name,
      picture: picture[0].name,
      status,
      type,
      userId: "4f185536-47e4-457c-b7a3-205cf45765e3",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
}
