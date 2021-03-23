import axios from '../axios'


export const submitLogin = async (payload) => {
    const formData = new URLSearchParams()
    formData.append('email', payload.email)
    formData.append('password', payload.password)

    try{
        return await 
        axios.post('/admin/login', formData)
             .then(res => {
                 localStorage.setItem('token_admin', res.data?.data.token)
                 return res
             })
             .catch(err => err.response)
    }catch{
        return "Failed"
    }
}

export const logout = async () => {
    await localStorage.removeItem('token_admin')
    return{
        success:true,
        message:"Berhasil Logout"
    }
}