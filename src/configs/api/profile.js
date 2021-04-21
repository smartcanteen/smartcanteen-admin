import axios from "../axios";

export const getProfile = async (token) => {
  try {
    return await axios
      .get("/admin", {
        headers: {
          Authorization:token,
        },
      })
      .then((res) => {
        localStorage.setItem('detail_admin', JSON.stringify(res.data.data))
        return res;
      })
      .catch((err) => err.response);
  } catch {
    return "Failed";
  }
};
