import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { authState } from "recoil/authentication/";
import { submitLogin } from 'configs/api'

const cardWidth = "20%"

const Login = () => {
  const token = useRecoilValue(authState);
  const[loginData, setLoginData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = useRecoilCallback( async ({set}) => {
    const result = await submitLogin(loginData)
    set(authState, {...authState, token:result.data.token})
    console.log(`token?.token`, token?.token)
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
        minW={cardWidth}
        maxW={cardWidth}
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
          <Button bgColor="primary.500" color="white" borderRadius="0" w="100%" onClick={handleSubmit}>
            Login
          </Button>
        </Box>
      </Box>

      <Box
        className="login-box"
        p={4}
        bg="white"
        minW={cardWidth}
        maxW={cardWidth}
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
