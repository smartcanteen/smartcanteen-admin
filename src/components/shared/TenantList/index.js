import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { TenantCard } from "components/shared";
import { getAllTenant } from "configs/api";
import { useRecoilValue } from "recoil";
import { authState } from "recoil/authentication";
const TenantList = props => {
  const [tenantData, setTenantData] = useState();
  useEffect(() => {
    const getAllTenantData = async () => {
      const response = await getAllTenant();
      console.log(`responsesadsad`, response)
      const { data } = response?.data
      if (response.data.success) {
        await setTenantData(data);
        props.updateTotalTenant(data.length)
      }
    };

    getAllTenantData();
  }, []);
  console.log(`tenantData`, tenantData)

  if (tenantData === undefined) {
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
        {tenantData?.map((tenant, index) => (
          <TenantCard key={index} tenantName={tenant.nama_warung} tenantId={tenant.id_warung} tenantDesc={tenant.deskripsi} />
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default TenantList;
