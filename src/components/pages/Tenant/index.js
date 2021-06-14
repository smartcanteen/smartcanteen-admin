import React, { useState } from "react";
import { Box, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import {
  DashboardDrawer,
  DashboardTopNav,
  DashboardBreadcrumb,
  DashboardContent,
  SellerProfileCard,
  StatsCard,
  TenantList,
  StatsList,
} from "components/shared";

const breadCrumbItem = [{ label: "tenant", uri: "/tenant" }];
const Tenant = () => {
  const [totalTenant, setTotalTenant] = useState();
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
              value={totalTenant}
              description="Total All Tenants"
            />
          </StatsList>
        </Container>
        <Container className="seller-profile-box-container" maxW="100%">
          <TenantList updateTotalTenant={setTotalTenant} />
        </Container>
      </DashboardContent>
    </Box>
  );
};

export default Tenant;
