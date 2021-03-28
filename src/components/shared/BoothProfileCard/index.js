import React from "react";
import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import BoothAvatar from "assets/images/BoothAvatar.svg";
import { Link } from "react-router-dom";

const cardWidth = "100%";
// const cardWidth = "250px";
const cardHeight = "150px";
const cardBorderRad = 8
const BoothProfileCard = () => {
  return (
    <Box
      minH={cardHeight}
      borderRadius={cardBorderRad}
      minW={cardWidth}
      maxW={cardWidth}
      pb={0}
      shadow="md"
      bgColor="white"
      d="inline-flex"
    >
      <Box
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        
      >
        <Image src={BoothAvatar} boxSize="30%" mt={3} mb={4} />
        <Box textAlign="center" px={4}>
          <Box my={2}>
            <Heading fontSize="lg" mb={2}>
              Warunk Mamah Muda
            </Heading>
            <Text>Ini adalah detail dari warunk mamah muda.</Text>
          </Box>
          <Divider />
          <Box
            my={4}
            d="inline-flex"
            alignItems="center"
            className="phone-number"
          >
            <PhoneIcon color="blackAlpha.700" mr={1} />
            <Text color="blackAlpha.700">0812938912</Text>
          </Box>
        </Box>
        <Box mt={2} minW="100%">
          <Link to="/booth/detail">
            <Button
              borderRadius="0"
              bgColor="primary.500"
              color="white"
              isFullWidth
              minH="50px"
              borderBottomRadius={cardBorderRad}
            >
              Details
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BoothProfileCard;
