import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Image, Flex, Center } from '@chakra-ui/react'
import { makeStyles, Card, TableCell, TableContainer, TableRow, TableBody, Table } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { DashboardDrawer, DashboardTopNav, DashboardBreadcrumb, DashboardContent, MenuCard } from 'components/shared'
import { authState } from 'recoil/authentication'
import { useRecoilCallback, useRecoilValue } from "recoil";
import { getSellerByAdmin, getSellerFood } from "configs/api";
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'



// first_namePenjual
// last_nameBaru
// emailjualan2@gmail.com
// passwordpenjual2
// no_telp0812345462

const SellerDetail = (props) => {
    const { token } = useRecoilValue(authState);
    const { uuid } = props.match.params
    const [sellerData, setSellerData] = useState();
    const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getFood = async (uuid) => {
            const response = await getSellerFood(uuid);
            const { data } = response?.data
            if (response.data.success) {
                await setFoodData(data);
            }

        }

        const getSellerData = async () => {
            const response = await getSellerByAdmin(token, uuid);
            console.log(`sellerbyadmin`, response)
            const { data } = response?.data
            if (response.data.success) {
                await setSellerData(data);
                if (data?.tenant) getFood(data?.tenant.id_warung);
            }
        };

        getSellerData();
    }, []);
    const breadCrumbItem = [
        { label: "seller", uri: "/seller" },
        { label: "Detail", uri: "/seller/detail/" + sellerData?.id_penjual }
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
                    <Box p={4} bgColor="primary.500" maxW="100%">
                        <Flex>
                            <Image src={ProfileAvatar} boxSize="7%" mr={8} />
                            <Center>
                                <Box color="white" justifyContent="center" py={1} >
                                    <Heading>
                                        {sellerData?.first_name + " " + sellerData?.last_name}
                                    </Heading>
                                    <Text style={{ fontSize: "24px" }}>
                                        {sellerData?.tenant ? sellerData?.tenant.nama_warung : "Belum ada"}
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
                                        <TableCell>{sellerData?.tenant ? sellerData?.tenant.nama_warung : "Belum ada"}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>

                    <Box p={2}>

                        {foodData && foodData?.map((food, index) => (
                        <MenuCard key={index} id_makanan={food.id_makanan} nama={food.nama} harga={food.harga} kategori={food.kategori} />
                        ))}
                    </Box>
                </Container>
            </DashboardContent>
        </Box >
    )
}

export default SellerDetail
