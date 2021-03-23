import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
    colors:{
        primary:{
            500:'#3F51B5', // Primary
            900:'#303F9F'  // Dark-Primary
        },
        bgcolor:{
            500:'#f1f1f1'
        },
        borderColor:{
            500:'#ccd0d4'
        }
    },
})

export default customTheme