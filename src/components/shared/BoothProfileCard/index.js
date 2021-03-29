import React from "react";
import PropTypes from 'prop-types'
import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import BoothAvatar from "assets/images/BoothAvatar.svg";
import { Link } from "react-router-dom";

const cardWidth = "100%";
// const cardWidth = "250px";
const cardHeight = "300px";
const cardBorderRad = 12
const BoothProfileCard = props => {
  const { boothName, boothDesc, boothPhone } = props
  return (
    <Box
      minH={cardHeight}
      maxH={cardHeight}
      borderRadius={cardBorderRad}
      minW={cardWidth}
      maxW={cardWidth}
      pb={0}
      pt={5}
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
              { boothName }
            </Heading>
            <Text>{ boothDesc }</Text>
          </Box>
          <Divider />
          <Box
            my={4}
            d="inline-flex"
            alignItems="center"
            className="phone-number"
          >
            <PhoneIcon color="blackAlpha.700" mr={1} />
            <Text color="blackAlpha.700">{ boothPhone }</Text>
          </Box>
        </Box>
        <Box minW="100%">
          <Link to="/booth/detail">
            <Button
              borderRadius="0"
              bgColor="primary.500"
              color="white"
              isFullWidth
              minH="55px"
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

BoothProfileCard.propTypes = {
  boothName: PropTypes.string,
  boothDesc: PropTypes.string,
  boothPhone: PropTypes.string
}
export default BoothProfileCard;
