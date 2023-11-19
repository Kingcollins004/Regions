import React from "react";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption = location.state.email;

  const handleVerify = () => {
    navigate("/create-profile");
  };
  return (
    <div>
      <Flex align="center" justifyContent="center" flexDirection="column">
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

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingX="5%"
          paddingTop={{base:"15%", md:"5%"}}
        >
          <Box
            textAlign="center"
            margin={{ base: "15% 5%", md: "5% 5%" }}
            padding="5%"
            borderRadius="20px"
            backgroundColor="white"
          >
            <Text
              fontSize={{ base: "20px", md: "30px" }}
              fontWeight="700"
              marginBottom="8%"
            >
              Verify Your Account
            </Text>
            <Text
              fontSize={{ base: "13px", md: "13px" }}
              color="#707070"
              marginBottom="8%"
            >
              A verification link has been sent to your emaii address
              <span className="user-num"> {selectedOption}</span>
            </Text>
            <Box marginBottom="8%">
              <Flex justifyContent="center"></Flex>
            </Box>
            <Button
              background="#558800"
              marginTop="4%"
              color="#fff"
              variant="outline"
              width="100%"
              padding="7%"
              borderRadius="10px"
              fontSize="15px"
              marginBottom="5%"
              onClick={handleVerify}
            >
              Verify Account
            </Button>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default ConfirmEmail;
