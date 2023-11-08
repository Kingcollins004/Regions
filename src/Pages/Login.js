import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Assets/SVG/regionsLogo.svg";
import "../App.css";

const Login = () => {
  return (
    <div>
      <Flex align="center" flexDirection="column">
        <Box marginTop={{ base: "4%", md: "2%" }}>
          <Image src={logo} />
        </Box>
        <Text marginTop={{ base: "7%", md: "3%" }} fontSize={{ base: "20px", md: "52px" }} fontWeight={{ base: "500", md: "300" }}>
          Access your account online
        </Text>
        <Text fontSize={{ base: "14px", md: "18px" }} marginTop="3%" fontWeight="600">
          Login to online banking
        </Text>
        <Box
          boxShadow="1px 2px 4px 0px rgba(0, 0, 0, 0.2)"
          padding="1% 2%"
          marginTop={{ base: "10%", md: "2%" }}
          borderRadius="30px"
          width={{ base: "95%", md: "28%" }}
        >
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Username
          </Text>
          <Input padding="7%" borderRadius="15px" border="3px solid #528400" />
          <Flex marginTop="2%">
            <Checkbox color="green" />
            <Text marginLeft="10px" fontSize="14px" fontWeight="600">
              Remember my username
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            marginTop="8%"
            marginBottom="3%"
            alignItems="center"
          >
            <Button
              backgroundColor="#528400"
              color="white"
              height="50px"
              borderRadius="25px"
              width="80%"
            >
              Continue
            </Button>
          </Flex>
        </Box>
        <Box marginTop="2%" textAlign="center">
          <Text fontSize="14px">
            Forgot <Link className="link">username</Link> or{" "}
            <Link className="link">password</Link>?
          </Text>
          <Text fontSize="14px" marginTop="2%">
            Don’t have an Online Banking account?{" "}
            <Link className="link" to="/signup">Enroll now.</Link>
          </Text>
        </Box>

        <Flex width={{ base: "95%", md: "60%" }} paddingTop={{ base: "7%", md: "3%" }} justifyContent="center">
          <Flex alignItems="center" flexWrap="wrap" justifyContent={{ base: "space-around", md: "space-between" }} width="100%">
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
        <Text marginTop="7%" width={{ base: "95%", md: "100%" }} fontSize="13px">
          Call <Link className="link">1-800-REGIONS (1-800-734-4667)</Link> or
          visit <Link className="link">Regions Help & Suppor</Link>t.
        </Text>
      </Flex>
    </div>
  );
};

export default Login;
