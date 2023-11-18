import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import line from "../Assets/SVG/lineIcon.svg";
import { useDisclosure } from "@chakra-ui/react";
import SendMoney from "../Components/SendMoney";
import moneySend from "../Assets/SVG/money-send.svg";
import { useSelector } from "react-redux";

const DashbaordBAckgroundContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  const userInfo = useSelector((state) => state.user);

  return (
    <div>
      <Box paddingY="5%" color="white" marginTop={{ base: "1%", md: "0" }}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box flex="1">
            <Text fontSize="22px" fontWeight="600">
              Welcome, {userInfo.firstName + ` ` + userInfo.lastName}
            </Text>
            <Text marginTop={{ base: "5%", md: "5%" }}>Total Balance</Text>
            <Text color="#F9F9F9" fontSize="42px" fontWeight="600">
              ${userInfo.amount}
            </Text>
            <Text fontSize="14px" fontWeight="light">
              $325.32 today, Oct 31st
            </Text>
          </Box>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            flex="1"
            justifyContent="flex-end"
            marginTop={{ base: "10%", md: "0" }}
            alignItems={{ base: "left", md: "center" }}
          >
            <Text
              paddingBottom={{ base: "5%", md: "0" }}
              borderBottom={{ base: "1px solid lightgray", md: "none" }}
              marginRight="5%"
            >
              View Analytics
            </Text>
            <Image
              display={{ base: "none", md: "block" }}
              marginRight="5%"
              height="20%"
              src={line}
            />

            <Flex marginTop={{ base: "7%", md: "0" }}>
              <Button
                ref={btnRef}
                onClick={onOpen}
                marginRight="2%"
                backgroundColor="#88BB00"
                borderRadius="25px"
                color="white"
                // padding={{base: "2% 4%", md:"3% 7%"}}
                width={{ base: "100%", md: "250px" }}
              >
                <Image width="20px" marginRight="5%" src={moneySend} />
                Send Money
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={{ base: "xs", md: "sm" }}
              >
                <DrawerOverlay />
                <DrawerContent width="150%">
                  <SendMoney balance={userInfo.amount} />
                </DrawerContent>
              </Drawer>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default DashbaordBAckgroundContent;
