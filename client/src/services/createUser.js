import axios from "axios";

export async function createUser(user) {
  const { email, password, name, phone } = user;

  const options = {
    method: "POST",
    url: "http://localhost:3000/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
      name,
      phone,
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
