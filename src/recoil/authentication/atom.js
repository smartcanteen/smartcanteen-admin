import { atom } from 'recoil'

export const authState = atom({
    key:'authState',
    default:{
        token:'iniToken'
    }
})

export const exampleAtom = atom({
    key:'exampleAtom',
    default:"this is example atom"
})