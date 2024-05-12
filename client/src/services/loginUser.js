import axios from "axios";

export async function loginUser(userInfo) {
  const { email, password } = userInfo;

  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_API_URL}/users/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
}
