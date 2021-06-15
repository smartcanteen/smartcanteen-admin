import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Image, Flex, Center, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { makeStyles, Card, TableCell, TableContainer, TableRow, TableBody, Table } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { DashboardDrawer, DashboardTopNav, DashboardBreadcrumb, DashboardContent } from 'components/shared'
import { authState } from 'recoil/authentication'
import { useRecoilCallback, useRecoilValue } from "recoil";
import { getTenantBySeller, getSellerFood } from "configs/api";
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'

const TenantDetail = (props) => {
    const { token } = useRecoilValue(authState);
    const { uuid } = props.match.params
    const [tenantData, setTenantData] = useState();
    const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getFood = async (uuid) => {
            const response = await getSellerFood(uuid);
            const { data } = response?.data
            if (response.data.success) {
                await setFoodData(data);
            }

        }

        // const getTenantData = async () => {
        //     const response = await getTenantBySeller(uuid);
        //     console.log(`tenantBySeller`, response)
        //     const { data } = response?.data
        //     if (response.data.success) {
        //         await setTenantData(data);
        //         // getFood(data?.tenant.id_warung);
        //     }
        // };

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

                    {/* <Box p={4} bgColor="primary.500" maxW="100%">
                        <Flex>
                            <Image src={ProfileAvatar} boxSize="7%" mr={8} />
                            <Center>
                                <Box color="white" justifyContent="center" py={1} >
                                    <Heading>
                                        {sellerData?.first_name + " " + sellerData?.last_name}
                                    </Heading>
                                    <Text style={{ fontSize: "24px" }}>
                                        {sellerData?.tenant.nama_warung}
                                    </Text>
                                </Box>
                            </Center>
                            <Edit style={{ color: "white" }} />
                            <Delete style={{ color: "white" }} />
                        </Flex>
                    </Box>
                    <Card >
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><Text>
                                            <span style={{ fontWeight: "bold" }}>{"Id Penjual"}</span>
                                        </Text></TableCell>
                                        <TableCell>{":"}</TableCell>
                                        <TableCell>{uuid}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Text>
                                            <span style={{ fontWeight: "bold" }}>{"Email"}</span>
                                        </Text></TableCell>
                                        <TableCell>{":"}</TableCell>
                                        <TableCell>{sellerData?.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Text>
                                            <span style={{ fontWeight: "bold" }}>{"No. Telepon"}</span>
                                        </Text></TableCell>
                                        <TableCell>{":"}</TableCell>
                                        <TableCell>{sellerData?.no_telp}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Text>
                                            <span style={{ fontWeight: "bold" }}>{"Tenant"}</span>
                                        </Text></TableCell>
                                        <TableCell>{":"}</TableCell>
                                        <TableCell>{sellerData?.tenant.nama_warung}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card> */}

                    {foodData?.map((food, index) => {
                        console.log(food)
                    })
                    }
                </Container>
            </DashboardContent>
        </Box >
    )
}

export default TenantDetail
