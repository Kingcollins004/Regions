import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import logoF from "../Assets/SVG/logoF.svg";
import displayImg from "../Assets/SVG/sbdisplayimg.svg";
import moneyStack from "../Assets/SVG/moneyStack.svg";
import moneyFan from "../Assets/SVG/moneyFan.svg";
import moneyBag from "../Assets/SVG/moneyBag.svg";
import piggyBank from "../Assets/SVG/piggyBank.svg";
import houseMoney from "../Assets/SVG/houseMoneySign.svg";
import creditCard from "../Assets/SVG/creditCard.svg";
import seeHow from "../Assets/PNG/business1.jpg";
import learn1 from "../Assets/PNG/business2.jpg";
import learn2 from "../Assets/PNG/business3.jpg";
import Footer from "../Components/Footer";
import facebook from "../Assets/SVG/facebook.svg";
import twitter from "../Assets/SVG/twitter.svg";
import instagram from "../Assets/SVG/instagram.svg";
import pintrest from "../Assets/SVG/pinterest.svg";
import linkedin from "../Assets/SVG/linkedin.svg";
import lock from "../Assets/SVG/lock.svg";
import { useNavigate } from "react-router-dom";
import WhyRegionsBusiness from "../Components/WhyRegionsBusiness";

const SmallBusiness = () => {
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
                Be informed and alert to
              </Text>
              <Text color="white" fontSize="44px" fontWeight="300">
                protect your business against fraud
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
              padding="3% 3%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyStack} />
              <Text>Business Checking</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 3%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={moneyFan} />
              <Text>Business credit </Text>
              <Text>Cards</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 3%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={creditCard} />
              <Text>Merchant services</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 3%"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
            >
              <Image width="80px" height="80px" src={piggyBank} />
              <Text>Payroll and beneifts</Text>
            </Flex>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              borderRadius="20px"
              padding="3% 3%"
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
              <Text>Cash management</Text>
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
          backgroundColor="#117689"
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
          <Flex width="100%" justifyContent="center">
            <Button
              onClick={handleClick}
              backgroundColor="white"
              width="fit-content"
              borderRadius="25px"
              color="#117689"
              marginTop="5%"
              padding="2% 3%"
            >
              Learn More
            </Button>
            <Button
              onClick={handleClick}
              backgroundColor="white"
              width="fit-content"
              borderRadius="25px"
              color="#117689"
              marginTop="5%"
              padding="2% 3%"
              marginLeft="3%"
            >
              Make an appointment
            </Button>
          </Flex>
        </Flex>

        <WhyRegionsBusiness />

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

        <Box backgroundColor="#F5F5F5">
          <Flex paddingX="10%" paddingY="1%">
            <Text>Home / Regions Personal Banking Services</Text>
          </Flex>
        </Box>

        <Box paddingX="10%" marginTop="3%">
          <Box paddingX="5%">
            <Text fontSize="14px">
              1. Regions CDs are uncertificated time deposit accounts and
              subject to the terms and conditions of the Regions Deposit Account
              Agreement and other related disclosures, terms, and conditions.
              This page is not an offer or contract and does not amend the
              Deposit Agreement, the terms of which govern and control. Annual
              Percentage Yields (APYs) are accurate as of 08/14/23. Rates
              offered for CDs may be changed at any time without notice. The
              minimum balance required to open the CD and obtain the APY is
              $500. Early withdrawal of funds may result in substantial penalty.
            </Text>
          </Box>
        </Box>

        <Flex paddingX="10%" paddingTop="3%" justifyContent="space-between">
          <Flex flex="5">
            <Image src={logoF} />
            <Text color="#222222" marginX="2%">
              Personal
            </Text>
            <Text color="#222222" marginX="2%">
              Small Business
            </Text>
            <Text color="#222222" marginX="2%">
              Commercial
            </Text>
            <Text color="#222222" marginX="2%">
              Wealth
            </Text>
            <Text color="#222222" marginX="2%">
              Resources
            </Text>
          </Flex>
          <Flex flex="1" justifyContent="space-between">
            <Image width="20px" src={twitter} />
            <Image width="20px" src={facebook} />
            <Image width="20px" src={instagram} />
            <Image width="20px" src={pintrest} />
            <Image width="20px" src={linkedin} />
          </Flex>
        </Flex>

        <Flex paddingX="10%" paddingTop="3%" justifyContent="center">
          <Flex alignItems="center" justifyContent="space-between" width="75%">
            <Text
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              marginX="2%"
            >
              About Regions
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Investor Relations
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Economic Report
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Property for sale
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Careers
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              The regions community
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              News
            </Text>
          </Flex>
        </Flex>

        <Flex paddingX="10%" paddingTop="1%" justifyContent="center">
          <Flex alignItems="center" justifyContent="space-between" width="73%">
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Privacy and Security
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Website Term of use
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Online Tracking and advertising
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Notice at Collections
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Assessible Banking
            </Text>
          </Flex>
        </Flex>

        <Box paddingX="10%" marginTop="5%">
          <Text
            fontWeight="600"
            fontSize="14px"
            marginY="1%"
            textAlign="center"
          >
            *Investment, insurance and annuities products
          </Text>
          <Flex
            borderRadius="10px"
            border="1px solid lightgray"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Flex>
              <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
                <Text textAlign="center">Are Not FDIC-Insured</Text>
              </Box>
              <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
                <Text textAlign="center">Are Not Bank Guaranteed</Text>
              </Box>
              <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
                <Text textAlign="center">May Lose Value</Text>
              </Box>
              <Box flex="1" padding="1% 2%">
                <Text textAlign="center">Are Not Deposits</Text>
              </Box>
            </Flex>
            <Flex borderTop="1px solid lightgray">
              <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
                <Text textAlign="center">
                  Are Not a Condition of Any Banking Activity
                </Text>
              </Box>
              <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
                <Text textAlign="center">
                  Are Not Insured by Any Federal Government Entity
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Footer />
      </Box>
    </div>
  );
};

export default SmallBusiness;
