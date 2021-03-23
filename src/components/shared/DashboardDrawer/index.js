import React from "react";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Image,
  Box,
  Text
} from "@chakra-ui/react";
import SmartCanteenLogo from 'assets/images/SmartCanteenLogo.svg'

import { ProfileCard } from 'components/shared'
const menuList = [
    {label:'home', uri:'/'},
    {label:'booth', uri:'/add'},
]

const DashboardDrawer = () => {
    const currentPath = useLocation().pathname;
  return (
    <Drawer variant='alwaysOpen' isOpen placement="left" motionPreset="none" autoFocus closeOnOverlayClick={false} trapFocus={false} useInert={false}>
      <DrawerContent>
        <DrawerHeader mb={12}>
            <Box d="flex" justifyContent="center" alignItems="center">
                <Image src={SmartCanteenLogo} boxSize="85%"/>
            </Box>
            </DrawerHeader>
        <DrawerBody>
        <Link to="/profile">
            <Box mb={5}>
                <ProfileCard/>
            </Box>
        </Link>
        {menuList.map((menu,index) =>
            <Link to={menu.uri} key={index}>
                <Button colorScheme="primary"  mb={5} variant={currentPath === menu.uri ? 'solid' : 'ghost'} width="100%" >
                    <Text w="100%" textAlign="left" textTransform="capitalize">
                        {menu.label}
                    </Text>
                </Button>
            </Link>
        
        )}
        </DrawerBody>
        <DrawerFooter>
          <Box>
              <Text fontSize="sm">
                &copy; SmartCanteen 2021 - All Rights Reserved.
              </Text>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DashboardDrawer;
