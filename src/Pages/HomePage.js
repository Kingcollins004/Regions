import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";

import displayImg from "../Assets/SVG/displayImg.svg";
import moneyStack from "../Assets/SVG/moneyStack.svg";
import moneyFan from "../Assets/SVG/moneyFan.svg";
import moneyBag from "../Assets/SVG/moneyBag.svg";
import piggyBank from "../Assets/SVG/piggyBank.svg";
import houseMoney from "../Assets/SVG/houseMoneySign.svg";
import creditCard from "../Assets/SVG/creditCard.svg";
import seeHow from "../Assets/PNG/seeHow.jpg";
import learn1 from "../Assets/PNG/learnMore1.jpg";
import learn2 from "../Assets/PNG/learnMore2.jpg";
import WhyRegions from "../Components/WhyRegions";
import Footer from "../Components/Footer";

import lock from "../Assets/SVG/lock.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
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
          <Flex justifyContent="space-between">
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyStack} />
              <Text>Checking</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyFan} />
              <Text>Debit & Prepaid</Text>
              <Text>Cards</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={creditCard} />
              <Text>Credit Cards</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={piggyBank} />
              <Text>Savings</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 3.5%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyBag} />
              <Text>Loans and Lines of</Text>
              <Text>Credit</Text>
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
              <Text>Mortgage</Text>
            </Flex>
          </Flex>
        </Box>

        <Flex paddingX="10%" marginTop="5%">
          <Box boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)" margin="2% 1% 1% 0">
            <Image width="500px" height="280px" src={seeHow} />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Get more value from your everyday
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                banking with Regions reward
              </Text>
              <Text paddingX="3%">See how</Text>
            </Box>
          </Box>
          <Box boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)" margin="2% 1% 1% 1%">
            <Image width="500px" height="280px" src={learn1} />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                How do i reach my savings goal
              </Text>
              <Text paddingX="3%">Learn More</Text>
            </Box>
          </Box>
          <Box boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)" margin="2% 0 1% 1%">
            <Image width="500px" height="280px" src={learn2} />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                Good stories. Better insights.More
              </Text>
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                possibilities
              </Text>
              <Text paddingX="3%">Learn more</Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          backgroundColor="#538500"
          paddingY="3%"
        >
          <Text
            marginBottom="1%"
            fontSize="44px"
            fontWeight="300"
            color="white"
          >
            Why Regions?
          </Text>
          <Text color="white" fontSize="18px">
            We are committed to keep customers first, providing tech drived
            convinience and a strong community partner.
          </Text>
        </Flex>

        <WhyRegions />

        <Box borderTop="1px solid lightgray" marginTop="5%">
          <Flex paddingX="10%">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flex="1"
              padding="8% 2%"
              borderRight="1px solid lightgray"
            >
              <Text fontSize="44px" fontWeight="300" marginBottom="1.5%">
                Help & Support
              </Text>
              <Text>Need help? We're here to help you find what you need.</Text>
              <Text>Frequently Asked Question</Text>
              <Text marginTop="2%">Ways to contact us</Text>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flex="1"
              padding="8% 2%"
            >
              <Text marginBottom="1.5%" fontSize="44px" fontWeight="300">
                Find a location
              </Text>
              <Text width="70%" textAlign="center">
                Use our location search to find the branch or ATM nearest you,
                or search for Regions Mortgage Lenders, Financial Advisors and
                Wealth Advisors.
              </Text>
              <Text marginTop="2%">Find a location</Text>
            </Flex>
          </Flex>
        </Box>

        <Footer />
      </Box>
    </div>
  );
};

export default HomePage;
