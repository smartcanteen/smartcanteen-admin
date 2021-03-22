import { atom, selectorFamily, selector } from 'recoil'

export const simpenData = async (payload) => {
    console.log(`payload`, payload)
}

const tokenAdmin = localStorage.getItem('token_admin') ? localStorage.getItem('token_admin') : '' 
const authStatus = tokenAdmin !== '' ? true : false
export const authState = atom({
    key:'authState',
    default:{
        token:tokenAdmin,
        isAuthenticated:authStatus,
    }
})

export const exampleAtom = atom({
    key:'exampleAtom',
    default:"this is example atom"
})