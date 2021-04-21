import React, { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { BoothProfileCard } from "components/shared";
import { getAllBooth } from "configs/api";
import { useRecoilValue } from "recoil";
import { authState } from "recoil/authentication";
const BoothProfileList = props => {
  const { token } = useRecoilValue(authState);
  const [boothData, setBoothData] = useState();
  useEffect(() => {
    const getAllBoothData = async () => {
      const response = await getAllBooth(token);
      console.log(`responsesadsad`, response)
      const { data } = response?.data
      if(response.data.success){
          await setBoothData(data);
          props.updateTotalBooth(data.length)
      }
    };

    getAllBoothData();
  }, []);
  console.log(`boothData`, boothData)

  if (boothData === undefined){
      return(
          <React.Fragment>
              <Spinner/>
          </React.Fragment>
      )
  }

  return (
    <React.Fragment>
      <Heading fontSize="xx-large" mb={3}>Booth Lists</Heading>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
        {boothData?.map((booth, index) => (
          <BoothProfileCard key={index} boothName={booth.first_name} boothDesc={booth.id_penjual} boothPhone={booth.no_telp}/>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default BoothProfileList;
