import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import flex1 from "../Assets/PNG/flex1Img.jpg";
import flex2 from "../Assets/PNG/flex2Img.jpg";
import flex3 from "../Assets/PNG/flex3Img.jpg";
import fin1 from "../Assets/PNG/fin1.jpg";
import fin2 from "../Assets/PNG/fin2.jpg";
import fin3 from "../Assets/PNG/fin3.jpg";
import fin4 from "../Assets/PNG/fin4.jpg";

const WhyRegions = () => {
  return (
    <Box paddingX={{ base: "2%", md: "10%" }} marginTop="5%">
      <Flex
        justifyContent="center"
        alignItems="top"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box marginRight="5%" width={{ base: "100%", md: "45%" }}>
          <Text
            fontSize={{ base: "20px", md: "40px" }}
            fontWeight={{ base: "500", md: "300" }}
          >
            Earn a predictable, competitive return with a Regions CD Account
          </Text>
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            marginTop={{ base: "3%", md: "5%" }}
          >
            Open a Regions Certificate of Deposit account today and grow your
            savings with a predictable return and minimal risk1. We offer
            flexible terms from 7 days to 72 months with minimum opening
            deposits starting at $500.
          </Text>
          <Flex marginTop={{ base: "5%", md: "2%" }}>
            <Button
              backgroundColor="#558800"
              padding="4% 5%"
              borderRadius="25px"
              color="white"
              fontSize={{ base: "13px", md: "16px" }}
            >
              Check rates
            </Button>
            <Button
              marginLeft="2%"
              backgroundColor="white"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
              padding="4% 5%"
              borderRadius="25px"
              color="#558800"
              fontSize={{ base: "13px", md: "16px" }}
            >
              Learn More
            </Button>
          </Flex>
        </Box>
        <Box marginTop={{ base: "5%", md: "0" }}>
          <Image width="450px" borderRadius="20px" src={flex1} />
        </Box>
      </Flex>

      <Flex
        marginTop="5%"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Image
            width={{ base: "380px", md: "400px" }}
            height={{ base: "250px", md: "280px" }}
            borderRadius="20px"
            src={flex2}
          />
        </Box>
        <Box
          marginLeft={{ base: "0", md: "5%" }}
          width={{ base: "100%", md: "45%" }}
        >
          <Text
            fontSize={{ base: "20px", md: "40px" }}
            marginTop={{ base: "3%", md: "0" }}
            fontWeight={{ base: "500", md: "300" }}
          >
            Digital investing
          </Text>
          <Text
            fontSize={{ base: "14px", md: "16px" }}
            marginTop={{ base: "2%", md: "0" }}
          >
            We put you in control, with a diversified investment portfolio
            that's based on your financial goals and risk tolerance, plus access
            to our team of Financial Advisors for planning and guidance whenever
            you need it.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="#558800"
              padding="4% 5%"
              borderRadius="25px"
              color="white"
              fontSize={{ base: "13px", md: "16px" }}
              marginTop={{ base: "2%", md: "0" }}
            >
              See how to get started with InestPath
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        marginTop="5%"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Box
          marginRight={{ base: "0", md: "5%" }}
          width={{ base: "100%", md: "45%" }}
        >
          <Text
            fontSize={{ base: "20px", md: "40px" }}
            fontWeight={{ base: "500", md: "300" }}
          >
            Create a budget and track goals
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }}>
            Get a clear picture of your finances with Regions My GreenInsights.
            We make it easy to manage your money at home or on the go.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="#558800"
              padding="4% 5%"
              borderRadius="25px"
              color="white"
              marginTop={{ base: "2%", md: "0" }}
            >
              Learn more about My GreenInsights
            </Button>
          </Flex>
        </Box>
        <Box marginTop={{ base: "3%", md: "0" }}>
          <Image width="400px" borderRadius="20px" src={flex3} />
        </Box>
      </Flex>

      <Box marginTop="9%">
        <Text textAlign="center" fontSize={{ base: "28px", md: "46px" }} fontWeight={{ base: "400", md: "300" }}>
          Financial tips and tools
        </Text>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box
            borderRadius="15px"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            margin="2% 1% 1% 0"
          >
            <Image
              borderRadius="15px 15px 0 0"
              width="500px"
              height="350px"
              src={fin1}
            />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                10 best ways to save money |
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Saving Tips
              </Text>
            </Box>
          </Box>

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
                Calculate a mortgage payment
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                | Mortgage rate calculator
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
                Understanding Debt
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Consolidation Options
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
                7 essential strategies for bills
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Paying in inflationary times
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
            Learn more about financial wellness
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyRegions;
