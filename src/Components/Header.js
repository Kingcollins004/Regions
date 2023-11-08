import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";

import { Link } from "react-router-dom";

import { useMediaQuery } from "@chakra-ui/react";
import menu from "../Assets/SVG/menuG.svg";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      {isMobile ? (
        <Flex
          paddingX="10%"
          paddingTop="3%"
          borderBottom="1px solid lightgray"
          justifyContent="space-between"
        >
          <Box flex="1">
            <Image src={logo} />
          </Box>
          <Menu>
            <MenuButton marginRight="-5%" backgroundColor="white" as={Button}>
              <Image src={menu} />
            </MenuButton>
            <MenuList>
              <MenuItem width="100%">
                <Link to="/">Personal</Link>
              </MenuItem>
              <MenuItem width="100%">
                <Link to="/small-business">Small Business</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/commercial">Commercial</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/wealth">Wealth</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/commercial">Commercial</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Resources">Resources</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/signup">Sign up</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
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
            marginTop="-1.5%"
            flex="1"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              padding="3% 10%"
              backgroundColor="#558800"
              color="white"
              marginRight="3%"
            >
              <Link to="/login">Login</Link>
            </Button>

            <Button padding="3% 10%" backgroundColor="#558800" color="white">
              <Link to="/sign-up">Sign up</Link>
            </Button>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default Header;
