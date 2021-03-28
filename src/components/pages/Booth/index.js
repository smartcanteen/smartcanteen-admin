import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  DashboardDrawer,
  DashboardTopNav,
  DashboardBreadcrumb,
  DashboardContent,
  BoothProfileCard,
} from "components/shared";

const breadCrumbItem = [
    {label:'booth', uri:'/booth'},
]
const Booth = () => {
  return (
    <Box minH="100vh">
      <DashboardDrawer />

      <DashboardTopNav>
        <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
      </DashboardTopNav>

      <DashboardContent minH="100vh">
          <Box bgColor='red'>
            <SimpleGrid columns={{sm: 3, md: 4}} spacing={5}>
              

                <BoothProfileCard/>
        
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>
                <BoothProfileCard/>

            </SimpleGrid>

          </Box>
          <Box>
              sdadasdasdkasdjasdskadlklasjd
              sdadasdasdkasdjasdskadlklasjd
              sdadasdasdkasdjasdskadlklasjd
              sdadasdasdkasdjasdskadlklasjd
              sdadasdasdkasdjasdskadlklasjd
          </Box>
      </DashboardContent>
    </Box>
  );
};

export default Booth;
