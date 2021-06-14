import React from "react";
import PropTypes from 'prop-types'
import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import SellerAvatar from "assets/images/SellerAvatar.svg";
import { Link } from "react-router-dom";

const cardWidth = "100%";
// const cardWidth = "250px";
const cardHeight = "300px";
const cardBorderRad = 12
const TenantCard = props => {
  const { tenantName, tenantId, tenantDesc } = props
  const link = "/tenant/detail/" + tenantId
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
        <Image src={SellerAvatar} boxSize="30%" mt={3} mb={4} />
        <Box textAlign="center" px={4}>
          <Box my={2}>
            <Heading fontSize="lg" mb={2}>
              {tenantName}
            </Heading>
            <Text>{tenantDesc}</Text>
          </Box>
          <Divider />
          <Box
            my={4}
            d="inline-flex"
            alignItems="center"
            className="phone-number"
          >
            <Text color="blackAlpha.700">{""}</Text>
          </Box>
        </Box>
        <Box minW="100%">
          <Link to={link}>
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

TenantCard.propTypes = {
  tenantName: PropTypes.string,
  tenantId: PropTypes.string,
}
export default TenantCard;
