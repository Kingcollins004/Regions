import React, { useState } from "react";
import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";
import search from "../Assets/SVG/search.svg";
import help from "../Assets/SVG/help.svg";
import { Link } from "react-router-dom";
import WhyRegions from "./WhyRegions";

const Header = () => {
  const [signup, setSignup] = useState(true);

  const handleClick = () => {
    if (signup) {
      setSignup(false);
    }
  };
  return (
    <div>
      {signup ? (
        <Flex
          paddingX="10%"
          paddingTop="3%"
          borderBottom="1px solid lightgray"
          justifyContent="space-between"
        >
          <Box flex="1">
            <Image src={logo} />
          </Box>

          <Flex flex="4">
            <Text color="#222222" marginX="2%" borderBottom="2px solid #528400">
              <Link to="/">Personal</Link>
            </Text>
            <Text color="#222222" marginX="2%">
              <Link to="/small-business">Small Business</Link>
            </Text>
            <Text color="#222222" marginX="2%">
              <Link to="/commercial">Commercial</Link>
            </Text>
            <Text color="#222222" marginX="2%">
              <Link to="/wealth">Wealth</Link>
            </Text>
            <Text color="#222222" marginX="2%">
              <Link to="/resources">Resources</Link>
            </Text>
          </Flex>

          <Flex
            marginTop="-1%"
            flex="1"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Image width="20px" src={help} />
              <Text>Help & Support</Text>
            </Flex>

            <Flex alignItems="center">
              <Image src={search} />
              <Text>Search</Text>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <WhyRegions />
      )}
    </div>
  );
};

export default Header;
