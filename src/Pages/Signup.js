import React from "react";
import { Box, Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Flex align="center" flexDirection="column">
      <Box marginTop={{ base: "5%", md: "2%" }}>
        <Image src={logo} />
      </Box>
      <Text
        marginTop="1%"
        fontSize={{ base: "24px", md: "52" }}
        fontWeight={{ base: "500", md: "300" }}
      >
        Create your account online
      </Text>
      <Text
        fontSize={{ base: "14px", md: "18px" }}
        marginTop="1%"
        fontWeight={{ base: "300", md: "600" }}
      >
        Open an account on our online banking platform
      </Text>
      <Box
        boxShadow="1px 2px 4px 0px rgba(0, 0, 0, 0.2)"
        padding="1% 2%"
        marginTop="2%"
        borderRadius="30px"
        width={{ base: "95%", md: "38%" }}
      >
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Fullname
          </Text>
          <Input
            placeholder="Susan Crater"
            padding="5%"
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Email
          </Text>
          <Input
            placeholder="Susan Crater"
            padding="5%"
            borderRadius="15px"
            border="3px solid #528400"
            type="example@youremail.com"
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Password
          </Text>
          <Input
            placeholder="Susan Crater"
            padding="5%"
            borderRadius="15px"
            border="3px solid #528400"
            type="password"
          />
        </Box>
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
            onClick={handleDashboard}
          >
            Sign up
          </Button>
        </Flex>
      </Box>
      <Box marginTop="1%" textAlign="center">
        <Text fontSize="14px" marginTop="2%">
          Have an Online Banking account?
          <Link to="/login" className="link">
            {" "}
            Login.
          </Link>
        </Text>
      </Box>

      <Flex
        width={{ base: "95%", md: "60%" }}
        paddingTop="2%"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ base: "space-around", md: "space-between" }}
          width="100%"
        >
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
      <Text marginTop="1%" width={{ base: "95%", md: "100%" }} fontSize="13px">
        Call <Link className="link">1-800-REGIONS (1-800-734-4667)</Link> or
        visit <Link className="link">Regions Help & Suppor</Link>t.
      </Text>
    </Flex>
  );
};

export default Signup;
