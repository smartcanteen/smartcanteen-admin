import axios from "../axios";

export const getProfile = async (token) => {
  try {
    return await axios
      .get("/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => err.response);
  } catch {
    return "Failed";
  }
};
