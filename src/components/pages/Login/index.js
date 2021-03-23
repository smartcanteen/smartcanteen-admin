import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  FormLabel,
  Input,
  InputGroup,
  Button,
  useToast
} from "@chakra-ui/react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { authState } from "recoil/authentication/";
import { submitLogin } from 'configs/api'

const cardWidth = {
  webSize:'25%',
  resSize:'80%'
}

const Login = () => {
  const toast = useToast()
  const history = useHistory()
  const {isAuthenticated} = useRecoilValue(authState);

  useEffect(()=>{
      if(isAuthenticated) history.push('/')
  },[])
  const[loginData, setLoginData] = useState({
    email:'',
    password:''
  })
  const[isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = useRecoilCallback( async ({set}) => {
    setIsLoading(true)
    const { data } = await submitLogin(loginData)
    console.log(`data`, data)
    if(!data.success){
      toast({
        title:data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }else{
      set(authState, {...authState, token:data?.data.token, isAuthenticated:true})
      history.push("/")
    }
    setIsLoading(false)
  })

  return (
    <Box
      className="login-page-wrapper"
      d="flex"
      flexDir="column"
      minW="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="login-box"
        p={8}
        mb={3}
        bg="white"
        minW={[cardWidth.resSize,cardWidth.resSize,cardWidth.webSize]}
        maxW={cardWidth.webSize}
        border="1px solid"
        borderColor="borderColor.500"
        borderTop="5px solid"
        borderTopColor="primary.500"
      >
        <Box mb={4}>
          <FormLabel for="email">Email Address</FormLabel>
          <InputGroup>
            <Input type="text" name="email" borderRadius="0" onChange={handleChange}/>
          </InputGroup>
        </Box>

        <Box mb={8}>
          <FormLabel for="password">Password</FormLabel>
          <InputGroup>
            <Input type="password" name="password" borderRadius="0" onChange={handleChange}/>
          </InputGroup>
        </Box>

        <Box mb={1}>
          <Button bgColor="primary.500" color="white" borderRadius="0" w="100%" onClick={handleSubmit} isLoading={isLoading}>
            Login
          </Button>
        </Box>
      </Box>

      <Box
        className="login-box"
        p={4}
        bg="white"
        minW={[cardWidth.resSize,cardWidth.resSize,cardWidth.webSize]}
        maxW={cardWidth.webSize}
        border="1px solid"
        borderColor="borderColor.500"
        textAlign="center"
      >
        Forgot Password? <Text as="u"><a href="#">Contact Developer</a></Text>
      </Box>
    </Box>
  );
};

export default Login;
