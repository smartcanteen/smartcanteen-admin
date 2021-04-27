import React, { useState } from 'react'
import { Box, Container, Heading, FormLabel, InputGroup, Input, Button  } from '@chakra-ui/react'
import { DashboardDrawer, DashboardTopNav, DashboardBreadcrumb, DashboardContent,  } from 'components/shared'
import { authState } from 'recoil/authentication'
import { useRecoilCallback, useRecoilValue } from "recoil";

import { registerBooth } from 'configs/api'
const breadCrumbItem = [
    { label: "booth", uri: "/booth" },
    { label: "Detail", uri: "/booth/detail"}
];

// first_namePenjual
// last_nameBaru
// emailjualan2@gmail.com
// passwordpenjual2
// no_telp0812345462

const BoothDetail = (props) => {
    const {token} = useRecoilValue(authState);
    console.log(props.match.params.uuid)

    //   console.log(`sellerData`, sellerData)
    return (
        <Box minH="100vh">
            <DashboardDrawer />
            <DashboardTopNav>
                <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
            </DashboardTopNav>

            <DashboardContent minH="100vh">
            <Container className="booth-add-box-container" maxW="100%" mb={8}>
                
            </Container>
            </DashboardContent>
        </Box>
    )
}

export default BoothDetail
