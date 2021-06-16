import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { SellerProfileCard } from "components/shared";
import { getAllSeller } from "configs/api";
import { useRecoilValue } from "recoil";
import { authState } from "recoil/authentication";
const SellerProfileList = props => {
  const { token } = useRecoilValue(authState);
  const [sellerData, setSellerData] = useState();
  useEffect(() => {
    const getAllSellerData = async () => {
      const response = await getAllSeller(token);
      console.log(`responsesadsad`, response)
      const { data } = response?.data
      if (response.data.success) {
        await setSellerData(data);
        props.updateTotalSeller(data.length)
      }
    };

    getAllSellerData();
  }, []);
  console.log(`sellerData`, sellerData)

  if (sellerData === undefined) {
    return (
      <React.Fragment>
        <Spinner />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Heading fontSize="xx-large" mb={3}>Seller Lists</Heading>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
        {sellerData?.map((seller, index) => {
          if (!seller.tenant) seller.tenant = {nama_warung: "Belum ada"}
          return (
          <SellerProfileCard key={index} sellerName={seller.first_name} sellerId={seller.id_penjual} sellerPhone={seller.no_telp} sellerTenant={seller.tenant.nama_warung} />
          )
        })}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default SellerProfileList;
