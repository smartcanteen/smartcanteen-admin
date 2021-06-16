import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Image, Flex, Center, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { makeStyles, Card, TableCell, TableContainer, TableRow, TableBody, Table } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { DashboardDrawer, DashboardTopNav, DashboardBreadcrumb, DashboardContent, MenuCard } from 'components/shared'
import { authState } from 'recoil/authentication'
import { useRecoilCallback, useRecoilValue } from "recoil";
import { getTenantBySeller, getSellerFood } from "configs/api";
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'

const TenantDetail = (props) => {
    const { token } = useRecoilValue(authState);
    const { uuid } = props.match.params
    console.log("UUID",uuid)
    const [tenantData, setTenantData] = useState();
    const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getTenantData = async () => {
            const response = await getTenantBySeller(uuid);
            console.log(`tenantBySeller`, response)
            const { data } = response?.data
            // console.log("TenantData",response)
            if (response.data.success) {
                await setTenantData(data);
                // getFood(data?.tenant.id_warung);
                await setFoodData(data.food)
            }
        };

        getTenantData();
    }, []);
    const breadCrumbItem = [
        { label: "tenant", uri: "/tenant" },
        { label: "Detail", uri: "/tenant/detail/" + tenantData?.id_warung }
    ];
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            margin: 2
        },
        pos: {
            marginBottom: 12,
        },
    });
    if (tenantData && foodData){
        return (
            <Box minH="100vh">
                <DashboardDrawer />
                <DashboardTopNav>
                    <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
                </DashboardTopNav>
                <DashboardContent minH="100vh">
                    <Container className="booth-add-box-container" maxW="100%" mb={8}>
                        <Box p={4} bgColor="primary.500" maxW="100%">
                            <Flex>
                                <Image src={ProfileAvatar} boxSize="7%" mr={8} />
                                <Center>
                                    <Box color="white" justifyContent="center" py={1} >
                                        <Heading>
                                            {tenantData.nama_warung}
                                        </Heading>
                                        <Text style={{ fontSize: "16px" }}>
                                            {tenantData?.deskripsi}
                                        </Text>
                                    </Box>
                                </Center>
                                <Edit style={{ color: "white" }} />
                                <Delete style={{ color: "white" }} />
                            </Flex>
                        </Box>
                        <Box p={2}>

                            {foodData?.map((food, index) => (
                            <MenuCard key={index} id_makanan={food.id_makanan} nama={food.nama} harga={food.harga} kategori={food.kategori} />
                            ))}
                        </Box>
                    </Container>
                </DashboardContent>
            </Box >
        )
    }else{
        return (
            <Box minH="100vh">
                <DashboardDrawer />
                <DashboardTopNav>
                    <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
                </DashboardTopNav>
                <DashboardContent minH="100vh">
                    <Container className="booth-add-box-container" maxW="100%" mb={8}>
                        <Tabs align="end" variant="enclosed">
                            <TabList>
                                <Tab>One</Tab>
                                <Tab>Two</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <p>one!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Container>
            </DashboardContent>
        </Box >
        )
    }
    
}

export default TenantDetail
