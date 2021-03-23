import { atom, selectorFamily, selector } from 'recoil'

const tokenAdmin = localStorage.getItem('token_admin') ? localStorage.getItem('token_admin') : '' 
const authStatus = tokenAdmin !== '' ? true : false


export const authTokenState = atom({
    key:'authTokenState',
    default:''
})


export const authState = atom({
    key:'authState',
    default:{
        token:tokenAdmin,
        isAuthenticated:authStatus,
    }
})

export const authData = atom({
    key:'authData',
    default:[]
})

export const exampleAtom = atom({
    key:'exampleAtom',
    default:"this is example atom"
})