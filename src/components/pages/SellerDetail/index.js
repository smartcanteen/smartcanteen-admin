import React, { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Button  } from '@chakra-ui/react'
import { DashboardDrawer, DashboardTopNav, DashboardBreadcrumb, DashboardContent,  } from 'components/shared'
import { authState } from 'recoil/authentication'
import { useRecoilCallback, useRecoilValue } from "recoil";
import { getSellerByAdmin, getSellerFood } from "configs/api";



// first_namePenjual
// last_nameBaru
// emailjualan2@gmail.com
// passwordpenjual2
// no_telp0812345462

const SellerDetail = (props) => {
    const {token} = useRecoilValue(authState);
    const { uuid } = props.match.params
    const [sellerData, setSellerData] = useState();
    const [foodData, setFoodData] = useState();
    useEffect(() => {
        const getFood = async (uuid) => {
            const response = await getSellerFood(uuid);
            const { data } = response?.data
            if(response.data.success){
                await setFoodData(data);
            }
            
        }

        const getSellerData = async () => {
            const response = await getSellerByAdmin(token,uuid);
            console.log(`sellerbyadmin`, response)
            const { data } = response?.data
            if(response.data.success){
                await setSellerData(data);
                getFood(data?.tenant.id_warung);
            }
        };

        getSellerData();
    }, []);
    const breadCrumbItem = [
        { label: "seller", uri: "/seller" },
        { label: "Detail", uri: "/seller/detail/"+sellerData?.id_penjual}
    ];
    return (
        <Box minH="100vh">
            <DashboardDrawer />
            <DashboardTopNav>
                <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
            </DashboardTopNav>

            <DashboardContent minH="100vh">
            <Container className="booth-add-box-container" maxW="100%" mb={8}>
                <Heading>
                    {"nama penjual " + sellerData?.first_name+" "+ sellerData?.last_name}
                </Heading>
                <Text>
                    {sellerData?.email}
                </Text>
                <Text>
                    {sellerData?.no_telp}
                </Text>
                <Text>
                    {sellerData?.email}
                </Text>

                <Heading>
                    {"Warung " + sellerData?.tenant.nama_warung}
                </Heading>
                <Text>
                    {sellerData?.tenant.deskripsi}
                </Text>

                {foodData?.map((food, index) => {
                    console.log(food)    
                })
                }
            </Container>
            </DashboardContent>
        </Box>
    )
}

export default SellerDetail
