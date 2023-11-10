import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import displayImg from "../Assets/SVG/displayImg.svg";
import displayImg2 from "../Assets/SVG/homeMobile.svg";
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
import { useMediaQuery } from "@chakra-ui/react";
import lock from "../Assets/SVG/lock.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Box margin="0" padding="0">
        <Header />
        <Box paddingX={{ base: "2%", md: "10%" }}>
          <Button
            onClick={handleClick}
            backgroundColor="#558800"
            width="100%"
            borderRadius="25px"
            color="white"
            marginTop="5%"
            padding="7% 5%"
            display={{ base: "flex", md: "none" }}
          >
            <Image src={lock} /> Log in
          </Button>
          {isMobile ? (
            <Flex
              alignItems="center"
              backgroundImage={displayImg2}
              backgroundRepeat="no-repeat"
              bgSize="cover"
              height="fit-content"
              flexDirection={{ base: "column", md: "row" }}
              marginTop="5%"
            >
              <Box padding="3% 2%" marginTop="45%">
                <Text
                  color="white"
                  fontSize={{ base: "28px", md: "44px" }}
                  fontWeight="300"
                >
                  Get $50 Visa Reward Card
                </Text>
                <Text
                  color="white"
                  fontSize={{ base: "24px", md: "44px" }}
                  fontWeight="300"
                >
                  If you refer a friend who opens a regions checking account
                </Text>
                <Button
                  backgroundColor="white"
                  borderRadius="25px"
                  color="#558800"
                  marginTop="5%"
                  padding="3.5% 5%"
                >
                  Learn more
                </Button>
              </Box>
            </Flex>
          ) : (
            <Flex
              alignItems="center"
              backgroundImage={displayImg}
              height={{ base: "auto", md: "550px" }}
              width="100%"
              justifyContent="space-between"
              backgroundRepeat="no-repeat"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box width="50%" marginLeft="4%">
                <Text
                  color="white"
                  fontSize={{ base: "20px", md: "44px" }}
                  fontWeight="300"
                >
                  Get $50 Visa Reward Card
                </Text>
                <Text
                  color="white"
                  fontSize={{ base: "20px", md: "44px" }}
                  fontWeight="300"
                >
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
                width={{ base: "90%", md: "25%" }}
                boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                alignItems="center"
                paddingY="5%"
                marginRight="5%"
                justifyContent="space-between"
                height="350px"
                paddingX="2%"
              >
                <Text fontSize={{ base: "16px", md: "24px" }} color="#222222">
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
          )}
        </Box>

        <Box
          paddingX={{ base: "2%", md: "10%" }}
          marginTop={{ base: "5%", md: "0" }}
        >
          <Text
            fontSize={{ base: "20px", md: "44px" }}
            fontWeight={{ base: "500", md: "300" }}
            textAlign="center"
          >
            I'm intrested in...
          </Text>
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              justifyContent={{ base: "space-evenly", md: "center" }}
              flexDirection={{ base: "row", md: "column" }}
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyStack} />
              <Text>Checking</Text>
            </Flex>
            <Flex
              justifyContent={{ base: "space-evenly", md: "center" }}
              flexDirection={{ base: "row", md: "column" }}
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyFan} />
              <Flex flexDirection={{ base: "row", md: "column" }}>
                <Text>Debit & Prepaid</Text>
                <Text marginLeft={{ base: "5px", md: "0" }}>Cards</Text>
              </Flex>
            </Flex>
            <Flex
              justifyContent={{ base: "space-evenly", md: "center" }}
              flexDirection={{ base: "row", md: "column" }}
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={creditCard} />
              <Text>Credit Cards</Text>
            </Flex>
            <Flex
              justifyContent={{ base: "space-evenly", md: "center" }}
              flexDirection={{ base: "row", md: "column" }}
              alignItems="center"
              borderRadius="20px"
              padding="3% 4%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={piggyBank} />
              <Text>Savings</Text>
            </Flex>
            <Flex
              justifyContent={{ base: "space-evenly", md: "center" }}
              flexDirection={{ base: "row", md: "column" }}
              alignItems="center"
              borderRadius="20px"
              padding="3% 3.5%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyBag} />
              <Flex flexDirection={{ base: "row", md: "column" }}>
                <Text>Loans and Lines of</Text>
                <Text marginLeft={{ base: "5px", md: "0" }}>Credit</Text>
              </Flex>
            </Flex>
            <Flex
              justifyContent={{ base: "space-evenly", md: "center" }}
              flexDirection={{ base: "row", md: "column" }}
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

        <Flex
          paddingX={{ base: "2%", md: "10%" }}
          flexDirection={{ base: "column", md: "row" }}
          marginTop="5%"
        >
          <Box boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)" margin="2% 1% 1% 0">
            <Image
              width={{ base: "450px", md: "500px" }}
              height={{ base: "200px", md: "280px" }}
              src={seeHow}
            />
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
            <Image
              width={{ base: "450px", md: "500px" }}
              height={{ base: "200px", md: "280px" }}
              src={learn1}
            />
            <Box paddingY="7%">
              <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                How do i reach my savings goal
              </Text>
              <Text paddingX="3%">Learn More</Text>
            </Box>
          </Box>
          <Box boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)" margin="2% 0 1% 1%">
            <Image
              width={{ base: "450px", md: "500px" }}
              height={{ base: "200px", md: "280px" }}
              src={learn2}
            />
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
            fontSize={{ base: "20px", md: "44px" }}
            fontWeight={{ base: "500", md: "300" }}
            color="white"
          >
            Why Regions?
          </Text>
          <Text
            color="white"
            fontSize={{ base: "14px", md: "18px" }}
            textAlign={{ base: "center", md: "left" }}
            fontWeight={{ base: "300", md: "500" }}
          >
            We are committed to keep customers first, providing tech drived
            convinience and a strong community partner.
          </Text>
        </Flex>

        <WhyRegions />

        <Box borderTop="1px solid lightgray" marginTop="5%">
          <Flex
            paddingX={{ base: "2%", md: "10%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flex="1"
              padding="8% 2%"
              borderRight={{ base: "none", md: "1px solid lightgray" }}
              borderBottom={{ base: "1px solid lightgray", md: "none" }}
            >
              <Text
                fontSize={{ base: "24px", md: "44px" }}
                fontWeight="300"
                marginBottom="1.5%"
              >
                Help & Support
              </Text>
              <Text fontSize={{ base: "14px", md: "16px" }}>
                Need help? We're here to help you find what you need.
              </Text>
              <Text fontSize={{ base: "14px", md: "16px" }}>
                Frequently Asked Question
              </Text>
              <Text marginTop="2%" fontSize={{ base: "14px", md: "16px" }}>
                Ways to contact us
              </Text>
            </Flex>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flex="1"
              padding="8% 2%"
            >
              <Text
                marginBottom="1.5%"
                fontSize={{ base: "24px", md: "44px" }}
                fontWeight="300"
              >
                Find a location
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                width={{ base: "100", md: "70%" }}
                textAlign="center"
              >
                Use our location search to find the branch or ATM nearest you,
                or search for Regions Mortgage Lenders, Financial Advisors and
                Wealth Advisors.
              </Text>
              <Text fontSize={{ base: "14px", md: "16px" }} marginTop="2%">
                Find a location
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Footer />
      </Box>
    </div>
  );
};

export default HomePage;
