import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
    colors:{
        primary:{
            500:'#795548', // Primary
            900:'#5D4037'  // Dark-Primary
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