import { atom, selectorFamily, selector } from 'recoil'

const tokenAdmin = localStorage.getItem('token_admin') ? localStorage.getItem('token_admin') : '' 
const authStatus = tokenAdmin !== '' ? true : false
const profileData = localStorage.getItem('detail_admin') ? JSON.parse(localStorage.getItem('detail_admin')) : null
export const authState = atom({
    key:'authState',
    default:{
        token:tokenAdmin,
        isAuthenticated:authStatus,
    }
})

export const authProfileData = atom({
    key:'authProfileData',
    default:profileData
})