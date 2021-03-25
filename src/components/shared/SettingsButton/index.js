import React from "react";
import { useHistory } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  Box,
  Text,
  useToast
} from "@chakra-ui/react";
import { ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import { useRecoilCallback } from 'recoil'
import { authState } from 'recoil/authentication'
import { logout } from 'configs/api'
const SettingsButton = () => {
    const history = useHistory()
    const toast = useToast()
    const handleLogout = useRecoilCallback( async ({set}) => {
    const { message, success } = await logout()
        if(success){
            toast({
                title:message,
                status: "success",
                duration: 9000,
                isClosable: true,
            })
            set(authState, {...authState, token:'', isAuthenticated:false})
            history.push("/login")
        }
    })
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bgColor="transparent">
        <Box d="flex" alignItems="center" justifyContent="center">
          <Icon as={SettingsIcon} mr={1} />
          <Text>Settings</Text>
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Button isFullWidth variant="ghost" onClick={handleLogout}>Logout</Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SettingsButton;
