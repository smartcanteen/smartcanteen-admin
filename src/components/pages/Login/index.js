import React from "react";
import {
  Box,
  Heading,
  Text,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState, exampleAtom } from "recoil/authentication/";
const Login = () => {
  const token = useRecoilState(exampleAtom);
  console.log(`token`, token);
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
        minW="25%"
        border="1px solid"
        borderColor="borderColor.500"
        borderTop="5px solid"
        borderTopColor="primary.500"
      >
        <Box mb={4}>
          <FormLabel for="email">Email Address</FormLabel>
          <InputGroup>
            <Input type="text" name="email" borderRadius="0" />
          </InputGroup>
        </Box>

        <Box mb={8}>
          <FormLabel for="password">Password</FormLabel>
          <InputGroup>
            <Input type="password" name="password" borderRadius="0" />
          </InputGroup>
        </Box>

        <Box mb={1}>
          <Button bgColor="primary.500" color="white" borderRadius="0" w="100%">
            Login
          </Button>
        </Box>
      </Box>

      <Box
        className="login-box"
        p={4}
        bg="white"
        minW="25%"
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
