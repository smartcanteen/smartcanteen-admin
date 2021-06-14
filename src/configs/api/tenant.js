import axios from "../axios";

export const getAllTenant = async () => {
  try {
    return await axios
      .get("/warung/all", {})

      .then((res) => res)
      .catch((err) => err.response);

  } catch {
    return "Failed"
  }
};