import React, { useState } from 'react'
import { Box, Container, Heading, FormLabel, InputGroup, Input, Button  } from '@chakra-ui/react'
import { DashboardDrawer, DashboardTopNav, DashboardBreadcrumb, DashboardContent,  } from 'components/shared'
import { authState } from 'recoil/authentication'
import { useRecoilCallback, useRecoilValue } from "recoil";

import { registerBooth } from 'configs/api'
const breadCrumbItem = [
    { label: "booth", uri: "/booth" },
    { label: "add booth", uri: "/booth-add"}
];

// first_namePenjual
// last_nameBaru
// emailjualan2@gmail.com
// passwordpenjual2
// no_telp0812345462

const BoothAdd = () => {
    const {token} = useRecoilValue(authState);
    const [sellerData, setSellerData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNumber:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSellerData((state) => ({ ...state, [name]: value }));
      };

    const handleSubmit = useRecoilCallback( async ({set}) => {
        const { data } = await registerBooth(token, sellerData)
        if(data.success){
            console.log(data)
        }
    })
    //   console.log(`sellerData`, sellerData)
    return (
        <Box minH="100vh">
            <DashboardDrawer />
            <DashboardTopNav>
                <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
            </DashboardTopNav>

            <DashboardContent minH="100vh">
            <Container className="booth-add-box-container" maxW="100%" mb={8}>
                <Heading>
                    Add Booth
                </Heading>
                <Box bgColor="#FFF" my={5} p={8} maxWidth="50%">
                    <Box mb={4}>
                        <FormLabel for="firstName">First Name</FormLabel>
                        <InputGroup>
                            <Input type="text" name="firstName" borderRadius="0" onChange={handleChange}/>
                        </InputGroup>
                    </Box>
                    <Box mb={4}>
                        <FormLabel for="lastName">Last Name</FormLabel>
                        <InputGroup>
                            <Input type="text" name="lastName" borderRadius="0" onChange={handleChange}/>
                        </InputGroup>
                    </Box>
                    <Box mb={4}>
                        <FormLabel for="email">Email</FormLabel>
                        <InputGroup>
                            <Input type="text" name="email" borderRadius="0" onChange={handleChange}/>
                        </InputGroup>
                    </Box>
                    <Box mb={4}>
                        <FormLabel for="password">Password</FormLabel>
                        <InputGroup>
                            <Input type="password" name="password" borderRadius="0" onChange={handleChange}/>
                        </InputGroup>
                    </Box>
                    <Box mb={4}>
                        <FormLabel for="phoneNumber">Phone Number</FormLabel>
                        <InputGroup>
                            <Input type="text" name="phoneNumber" borderRadius="0" onChange={handleChange}/>
                        </InputGroup>
                    </Box>
                    <Button bgColor="primary.500" color="white" borderRadius="0" onClick={handleSubmit}>
                        Register
                    </Button>
                </Box>
            </Container>
            </DashboardContent>
        </Box>
    )
}

export default BoothAdd
