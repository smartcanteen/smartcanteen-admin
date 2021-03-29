import axios from "../axios";

export const getAllBooth = async (token) => {
    try{
        return await axios
          .get("/penjual/all", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
      
          .then((res) => res)
          .catch((err) => err.response);

    }catch{
        return "Failed"
    }
};