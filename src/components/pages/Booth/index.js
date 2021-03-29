import React, { useState } from "react";
import { Box, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import {
  DashboardDrawer,
  DashboardTopNav,
  DashboardBreadcrumb,
  DashboardContent,
  BoothProfileCard,
  StatsCard,
  BoothProfileList,
  StatsList,
} from "components/shared";

const breadCrumbItem = [{ label: "booth", uri: "/booth" }];
const Booth = () => {
  const [totalBooth, setTotalBooth] = useState();
  return (
    <Box minH="100vh">
      <DashboardDrawer />

      <DashboardTopNav>
        <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
      </DashboardTopNav>

      <DashboardContent minH="100vh">
        <Container className="booth-profile-box-container" maxW="100%" mb={8}>
          <StatsList>
            <StatsCard
              background="primary.900"
              value={totalBooth}
              description="Total All Booths"
            />
          </StatsList>
        </Container>
        <Container className="booth-profile-box-container" maxW="100%">
          <BoothProfileList updateTotalBooth={setTotalBooth} />
        </Container>
      </DashboardContent>
    </Box>
  );
};

export default Booth;
