import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Header from "../Components/Header";
import displayImg from "../Assets/SVG/displayImg.svg";
import Footer from "../Components/Footer";
import lock from "../Assets/SVG/lock.svg";
import { useNavigate } from "react-router-dom";
import fin1 from "../Assets/PNG/comflex1.jpg";
import fin2 from "../Assets/PNG/comflex2.jpg";
import fin3 from "../Assets/PNG/comflex3.jpg";
import fin4 from "../Assets/PNG/comflex4.jpg";
import flex2 from "../Assets/PNG/comreg2.png";
import flex3 from "../Assets/PNG/comreg.jpg";
import flex4 from "../Assets/PNG/comreg3.jpg";

const Commercial = () => {
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

        <Box paddingX="10%" marginTop="9%">
          <Text textAlign="center" fontSize="46px" fontWeight="300">
            Financial tips and tools
          </Text>

          <Flex>
            <Box
              borderRadius="15px"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
              margin="2% 1% 1% 0"
              flex="1"
            >
              <Image
                borderRadius="15px 15px 0 0"
                width="500px"
                height="200px"
                src={fin1}
              />
              <Flex flexDirection="column" justifyContent="space-between">
                <Box flex="1" paddingY="7%">
                  <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                    Lending & Financing
                  </Text>
                  <Text
                    marginTop="3%"
                    fontSize="16px"
                    width=""
                    fontWeight="regular"
                    paddingX="3%"
                  >
                    We can tailor solutions to your financial objectives through
                    a variety of commercial lending and financing options,
                    including services for government, institutions and
                    nonprofits organizations .
                  </Text>
                </Box>
                <Spacer />
                <Box flex="1" textAlign="center" marginTop="2%">
                  <Button
                    padding="7% 8%"
                    borderRadius="25px"
                    boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
                    marginBottom="5%"
                    border="1px solid blue"
                    backgroundColor="white"
                  >
                    Lending and financing
                  </Button>
                </Box>
              </Flex>
            </Box>

            <Box
              borderRadius="15px"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
              margin="2% 1% 1% 0"
              flex="1"
            >
              <Image
                borderRadius="15px 15px 0 0"
                width="500px"
                height="200px"
                src={fin2}
              />
              <Flex flexDirection="column" justifyContent="space-between">
                <Box paddingY="7%">
                  <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                    Treasury Services
                  </Text>
                  <Text
                    marginTop="3%"
                    fontSize="16px"
                    width=""
                    fontWeight="regular"
                    paddingX="3%"
                  >
                    Our treasury management solutions are designed to enhance
                    your company's cash flow by streamlining accounts payables
                    and receivables, improving liquidity management, and
                    reducing and mitigating your exposure to risk.
                  </Text>
                </Box>
                <Box textAlign="center" marginTop="2%">
                  <Button
                    padding="7% 8%"
                    borderRadius="25px"
                    boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
                    marginBottom="5%"
                    border="1px solid blue"
                    backgroundColor="white"
                  >
                    Treasury Services
                  </Button>
                </Box>
              </Flex>
            </Box>

            <Box
              borderRadius="15px"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
              margin="2% 1% 1% 0"
              flex="1"
            >
              <Image
                borderRadius="15px 15px 0 0"
                width="500px"
                height="200px"
                src={fin3}
              />
              <Box paddingY="7%">
                <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                  Regions Securities
                </Text>
                <Text
                  marginTop="3%"
                  fontSize="16px"
                  width=""
                  fontWeight="regular"
                  paddingX="3%"
                >
                  We use a consultative approach and a broad array of products,
                  services and solutions to help you achieve your capital
                  structure and strategic objectives.
                </Text>
              </Box>
              <Box textAlign="center" marginTop="2%">
                <Button
                  padding="7% 8%"
                  borderRadius="25px"
                  boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
                  marginBottom="5%"
                  border="1px solid blue"
                  backgroundColor="white"
                >
                  Regions Securities
                </Button>
              </Box>
            </Box>
            <Box
              borderRadius="15px"
              boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
              margin="2% 1% 1% 0"
              flex="1"
            >
              <Image
                borderRadius="15px 15px 0 0"
                width="500px"
                height="200px"
                src={fin4}
              />
              <Box paddingY="7%">
                <Text fontSize="20px" fontWeight="semibold" paddingX="3%">
                  Real Estate Banking
                </Text>
                <Text
                  marginTop="3%"
                  fontSize="16px"
                  fontWeight="regular"
                  paddingX="3%"
                >
                  Regions has a team of highly experienced real estate banking
                  professionals to meet the needs of real estate companies,
                  developers and investors.
                </Text>
              </Box>
              <Box textAlign="center" marginTop="2%">
                <Button
                  padding="7% 8%"
                  borderRadius="25px"
                  boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2)"
                  marginBottom="5%"
                  border="1px solid blue"
                  backgroundColor="white"
                >
                  Real Estate Banking
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="400px" borderRadius="20px" src={flex3} />
        </Box>
        <Box marginLeft="5%" width="40%">
          <Text fontSize="40px" fontWeight="300">
            Commercial Insights with Regions Bank Podcast
          </Text>
          <Text fontSize="16px">
            Our Commercial Banking professionals share timely information and
            strategies to help your business navigate challenges, prepare for
            the future and make the most of opportunities on the horizon.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 5%"
              borderRadius="25px"
              color="#117689"
              border="1px solid lightblue"
            >
              Learn more
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="400px" borderRadius="20px" src={flex2} />
        </Box>

        <Box marginLeft="5%" width="40%">
          <Text fontSize="40px" fontWeight="300">
            Industry Expertise
          </Text>
          <Text fontSize="16px">
            From healthcare to government, Regions advises corporations on ways
            to execute strategic and growth objectives across a wide range of
            industries.
          </Text>
          <UnorderedList>
            <ListItem>Healthcare & Healthcare Real Estate</ListItem>
            <ListItem>Energy & Natural Resources</ListItem>
            <ListItem>Transportation & Logistics</ListItem>
            <ListItem>Defense, Aerospace & Government</ListItem>
            <ListItem>Technology, Media & Communications</ListItem>
            <ListItem>Financial Services</ListItem>
            <ListItem>Diversified Industries</ListItem>
          </UnorderedList>
        </Box>
      </Flex>

      <Flex marginTop="5%" justifyContent="center" alignItems="center">
        <Box>
          <Image width="400px" borderRadius="20px" src={flex4} />
        </Box>
        <Box marginLeft="5%" width="40%">
          <Text fontSize="40px" fontWeight="300">
          Fraud Prevention and Awareness
          </Text>
          <Text fontSize="16px">
            We want to help keep your business safe from fraud. Leverage our
            tools and resources to help protect your payment transactions and
            private data.
          </Text>
          <Flex marginTop="2%">
            <Button
              backgroundColor="white"
              padding="4% 5%"
              borderRadius="25px"
              color="#117689"
              border="1px solid lightblue"
            >
              Fraud Protection for Business
            </Button>

            <Button
              backgroundColor="white"
              marginLeft="5%"
              padding="4% 5%"
              borderRadius="25px"
              color="#117689"
              border="1px solid lightblue"
            >
              Fraud Prevention Resources
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </div>
  );
};

export default Commercial;
