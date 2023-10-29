import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import flex2 from "../Assets/PNG/offset.jpg";
import flex3 from "../Assets/PNG/offset2.jpg";
import fin2 from "../Assets/PNG/Bfin1.jpg";
import fin3 from "../Assets/PNG/Bfin2.jpg";
import fin4 from "../Assets/PNG/Bfin3.jpg";

const WhyRegionsBusiness = () => {
  return (
    <Box paddingX="10%" marginTop="5%">
      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="400px" borderRadius="20px" src={flex2} />
        </Box>
        
        <Box marginLeft="5%" width="45%">
          <Text fontSize="40px" fontWeight="300">
            Build a custom financial plan with Greenprint for Business
          </Text>
          <Text fontSize="16px">
            Using Greenprint for Business, our bankers can help you create a
            customized financial plan to help your business grow stronger and
            achieve its financial goals.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 0"
              borderRadius="25px"
              color="#117689"
            >
              Make an appointment
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="400px" borderRadius="20px" src={flex3} />
        </Box>
        <Box marginLeft="5%" width="45%">
          <Text fontSize="40px" fontWeight="300">
            Stay a step ahead with Digital Services for Small Business
          </Text>
          <Text fontSize="16px">
            Our online banking services for business can help you simplify your
            finances, save time and increase productivity.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 0"
              borderRadius="25px"
              color="#117689"
            >
              Learn more
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Box marginTop="9%">
        <Text textAlign="center" fontSize="46px" fontWeight="300">
        Next Step for Business resources
        </Text>
        <Flex marginX="10%">
          <Box
            borderRadius="15px"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            margin="2% 1% 1% 1%"
          >
            <Image
              borderRadius="15px 15px 0 0"
              width="500px"
              height="350px"
              src={fin2}
            />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Choosing point-of-sale
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                systems for small business
              </Text>
            </Box>
          </Box>

          <Box
            borderRadius="15px"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            margin="2% 0 1% 1%"
          >
            <Image
              borderRadius="15px 15px 0 0"
              width="500px"
              height="350px"
              src={fin3}
            />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Guide to small business
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                cash flow management
              </Text>
            </Box>
          </Box>

          <Box
            borderRadius="15px"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            margin="2% 0 1% 1%"
          >
            <Image
              borderRadius="15px 15px 0 0"
              width="500px"
              height="350px"
              src={fin4}
            />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                How to create an anti-fraud
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                training program
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box textAlign="center" marginTop="2%">
          <Button
            padding="2% 3%"
            borderRadius="25px"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            See all next step resources
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyRegionsBusiness;
