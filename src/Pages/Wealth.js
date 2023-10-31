import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";

import displayImg from "../Assets/SVG/displayImg.svg";
import WinBag from "../Assets/SVG/WinBag.svg";
import Winpiggy from "../Assets/PNG/WinPiggy.png";
import retire from "../Assets/SVG/WinRetire.svg";
import houseMoney from "../Assets/SVG/WinMoney.svg";
import WinDesk from "../Assets/SVG/WinDesk.svg";
import tp1 from "../Assets/SVG/TP1.svg";
import tp2 from "../Assets/SVG/TP2.svg";
import tp3 from "../Assets/SVG/TP3.svg";
import tp4 from "../Assets/SVG/TP4.svg";
import flex1 from "../Assets/PNG/WhyWealthF2.jpg";
import lock from "../Assets/SVG/lock.svg";
import { useNavigate } from "react-router-dom";
import WhyRegionsW from "../Components/WhyRegionsW";

const Wealth = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box>
      <Header />
      <Box paddingX="10%">
        <Flex
          alignItems="center"
          backgroundImage={displayImg}
          height="550px"
          width="100%"
          justifyContent="space-between"
          backgroundRepeat="no-repeat"
        >
          <Box width="50%" marginLeft="4%">
            <Text color="white" fontSize="44px" fontWeight="300">
              Get $50 Visa Reward Card
            </Text>
            <Text color="white" fontSize="44px" fontWeight="300">
              If you refer a friend who opens a regions checking account
            </Text>
            <Button
              backgroundColor="#558800"
              borderRadius="25px"
              color="white"
              marginTop="5%"
              padding="3.5% 5%"
            >
              Learn more
            </Button>
          </Box>
          <Flex
            flexDirection="column"
            backgroundColor="white"
            borderRadius="10px"
            width="25%"
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            alignItems="center"
            paddingY="5%"
            marginRight="5%"
            justifyContent="space-between"
            height="350px"
            paddingX="2%"
          >
            <Text fontSize="24px" color="#222222">
              Log in to online banking
            </Text>
            <Text textAlign="center" marginTop="2%">
              Monitor your account, make payment, move money and more.
            </Text>
            <Button
              onClick={handleClick}
              backgroundColor="#558800"
              width="100%"
              borderRadius="25px"
              color="white"
              marginTop="5%"
              padding="9% 5%"
            >
              <Image src={lock} /> Log in
            </Button>
            <Text marginTop="5%">Enroll in online bank</Text>
            <Text marginTop="5%">Privacy and security</Text>
          </Flex>
        </Flex>
      </Box>

      <Box paddingX="10%">
        <Text fontSize="48px" fontWeight="300" textAlign="center">
          I'm intrested in...
        </Text>
        <Flex paddingX="3%" justifyContent="space-between">
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={Winpiggy} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Financial Planning
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={retire} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Retirement Planning
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={houseMoney} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Private Wealth
            </Text>
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Management
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={WinDesk} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Didital Investing
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 3.5%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={WinBag} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Institutional Wealth
            </Text>
          </Flex>
        </Flex>
      </Box>

      <WhyRegionsW />

      <Flex
        flexDirection="column"
        alignItems="center"
        backgroundColor="lightgray"
        paddingY="3%"
        marginTop="5%"
        paddingX="15%"
        textAlign="center"
      >
        <Text marginBottom="1%" fontSize="44px" fontWeight="300">
          Connect with us today.
        </Text>
        <Text fontSize="18px">
          We provide customized, personalized solutions for your financial
          future. Learn more about our diverse services and experience. Find
          contact details for private wealth management and institutional wealth
          services.
        </Text>
        <Flex width="100%" justifyContent="center">
          <Button
            onClick={handleClick}
            backgroundColor="#528400"
            width="fit-content"
            borderRadius="25px"
            color="white"
            marginTop="5%"
            padding="2% 3%"
          >
            Contact a wealth advisor
          </Button>
          <Button
            onClick={handleClick}
            backgroundColor="#528400"
            width="fit-content"
            borderRadius="25px"
            color="white"
            marginTop="5%"
            padding="2% 3%"
            marginLeft="3%"
          >
            Connect with institutional services
          </Button>
        </Flex>
      </Flex>

      <Box textAlign="center" marginTop="5%" paddingX="5%">
        <Text fontSize="48px" fontWeight="300" textAlign="center">
          Tools & Resources
        </Text>
        <Flex paddingX="3%" justifyContent="space-between">
          <Flex
            flex="1"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={tp1} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Podcast
            </Text>
            <Text fontSize="18px">Listen to our regions wealth podcast</Text>
          </Flex>
          <Flex
            flex="1"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={tp2} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Calculators
            </Text>
            <Text fontSize="18px">Calculate your retirement needs</Text>
          </Flex>
          <Flex
            flex="1"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={tp3} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Insights Library
            </Text>
            <Text fontSize="18px">Learn more about wealth management</Text>
          </Flex>
          <Flex
            flex="1"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius="20px"
            padding="3% 4%"
            boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
          >
            <Image width="80px" height="80px" src={tp4} />
            <Text fontSize="18px" fontWeight="600" color="#006666">
              Online Guide
            </Text>
            <Text fontSize="18px">
              Take a quiz on your investment and savings progress
            </Text>
          </Flex>
        </Flex>
      </Box>

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
    </Box>
  );
};

export default Wealth;
