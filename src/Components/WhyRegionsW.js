import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import flex1 from "../Assets/PNG/WhyWealthF2.jpg";
import flex2 from "../Assets/PNG/flex2Img.jpg";
import flex3 from "../Assets/PNG/WhyWealthF3.jpg";
import flex4 from "../Assets/PNG/WhyWealthF4.jpg";
import fin1 from "../Assets/PNG/fin1.jpg";
import fin2 from "../Assets/PNG/fin2.jpg";
import fin3 from "../Assets/PNG/fin3.jpg";
import fin4 from "../Assets/PNG/fin4.jpg";

const WhyRegionsW = () => {
  return (
    <Box paddingX="10%" marginTop="5%">
      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="450px" borderRadius="20px" src={flex2} />
        </Box>
        <Box marginLeft="5%" width="45%">
          <Text fontSize="40px" fontWeight="300">
            InvestPath® Digital Advisor
          </Text>
          <Text fontSize="16px">
            Regions InvestPath® puts you in control of your investments, with a
            diversified investment portfolio that's based on your financial
            goals and risk tolerance, plus access to our team of Financial
            Advisors for planning and guidance whenever you need it.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 5%"
              borderRadius="25px"
              color="#006666"
              border="1px solid lightgray"
            >
              See how to get started with InestPath
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex marginTop="5%" justifyContent="center" alignItems="top">
        <Box>
          <Image width="450px" borderRadius="20px" src={flex1} />
        </Box>
        <Box marginLeft="5%" width="45%">
          <Text fontSize="40px" fontWeight="300">
            Private Wealth Management Solutions
          </Text>
          <Text fontSize="16px">
            Whether you are early in your journey of financial planning and
            investing or managing a high-net-worth portfolio, trust Regions for
            guidance that can prepare you for every step and every major life
            moment.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="#558800"
              padding="4% 5%"
              borderRadius="25px"
              color="#006666"
              border="1px solid lightgray"
            >
              Explore our offerings
            </Button>
            <Button
              marginLeft="2%"
              backgroundColor="white"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
              padding="4% 5%"
              borderRadius="25px"
              color="#558800"
            >
              Find a wealth advisor
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="450px" borderRadius="20px" src={flex3} />
        </Box>
        <Box marginLeft="5%" width="45%">
          <Text fontSize="40px" fontWeight="300">
            Institutional Services for Corporate Clients
          </Text>
          <Text fontSize="16px">
            Institutional needs are complex for all corporations. We have
            investments services and management solutions to prepare your
            business or organization with retirement plans, corporate trust,
            custody, asset management and more.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 5%"
              borderRadius="25px"
              color="#006666"
              border="1px solid lightgray"
            >
              Learn more about our services
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="450px" borderRadius="20px" src={flex4} />
        </Box>
        <Box marginLeft="5%" width="45%">
          <Text fontSize="40px" fontWeight="300">
            Market Insights
          </Text>
          <Text fontSize="16px">
            Join live weekly client calls, read timely economic commentary and
            learn more about wealth planning strategies from the Regions Wealth
            Management team.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 5%"
              borderRadius="25px"
              color="#006666"
              border="1px solid lightgray"
            >
              Learn more about our marketing insights
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyRegionsW;
