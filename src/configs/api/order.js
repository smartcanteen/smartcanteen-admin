import axios from "../axios";

export const getStatistikAdmin = async () => {
    try{
        return await axios
          .get("/order/statistikAdmin")
      
          .then((res) => res)
          .catch((err) => err.response);

    }catch{
        return "Failed"
    }
};