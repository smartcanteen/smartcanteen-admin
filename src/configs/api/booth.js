import axios from "../axios";

export const getAllBooth = async (token) => {
    try{
        return await axios
          .get("/penjual/all", {
            headers: {
              Authorization: token,
            },
          })
      
          .then((res) => res)
          .catch((err) => err.response);

    }catch{
        return "Failed"
    }
};
export const registerBooth = async (token, payload) => {
    console.log(`payload`, payload)
    const formData = new URLSearchParams()
    formData.append('first_name', payload.firstName)
    formData.append('last_name', payload.lastName)
    formData.append('email', payload.email)
    formData.append('password', payload.password)
    formData.append('no_telp', payload.phoneNumber)
  try{
    return await axios({
      headers:{
        Authorization:token
      },
      method: 'post',
      url: '/penjual/register',
      data: formData
    });
    // return await axios
    //   .post("/penjual/register", {
    //     headers:{
    //       Authorization: token
    //     },
    //     data:formData
    //   })
    //   .then((res) => res)
    //   .catch((err) => err.response)
  }catch{
    return "Failed"
  }
}