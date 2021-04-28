import React, { useState } from "react";
import { Box, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import {
  DashboardDrawer,
  DashboardTopNav,
  DashboardBreadcrumb,
  DashboardContent,
  SellerProfileCard,
  StatsCard,
  SellerProfileList,
  StatsList,
} from "components/shared";

const breadCrumbItem = [{ label: "seller", uri: "/seller" }];
const Seller = () => {
  const [totalSeller, setTotalSeller] = useState();
  return (
    <Box minH="100vh">
      <DashboardDrawer />

      <DashboardTopNav>
        <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
      </DashboardTopNav>

      <DashboardContent minH="100vh">
        <Container className="seller-profile-box-container" maxW="100%" mb={8}>
          <StatsList>
            <StatsCard
              background="primary.900"
              value={totalSeller}
              description="Total All Sellers"
            />
          </StatsList>
        </Container>
        <Container className="seller-profile-box-container" maxW="100%">
          <SellerProfileList updateTotalSeller={setTotalSeller} />
        </Container>
      </DashboardContent>
    </Box>
  );
};

export default Seller;
