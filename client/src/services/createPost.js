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

  const formData = new FormData();
  formData.append({
    age: age || "",
    breed: breed || "Sem raça definida",
    lastSeenAt: lastSeenAt || "",
    lastSeenOn: formattedDate,
    name: name,
    status: status,
    type: type,
    userId: "4f185536-47e4-457c-b7a3-205cf45765e3",
    picture: picture[0],
  });

  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_API_URL}/posts`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
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
