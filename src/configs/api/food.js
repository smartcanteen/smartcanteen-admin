import axios from "../axios";

export const getSellerFood = async (uuid) => {
  try{
      return await axios
        .get("/makanan?id_warung="+uuid, {
        })
    
        .then((res) => res)
        .catch((err) => err.response);

  }catch{
      return "Failed"
  }
};