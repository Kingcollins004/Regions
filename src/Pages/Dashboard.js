import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import logo from "../Assets/SVG/logoW.svg";
import notification from "../Assets/SVG/notificationIcon.svg";
import user from "../Assets/SVG/userIcon.svg";
import settings from "../Assets/SVG/settingsIcon.svg";
import line from "../Assets/SVG/lineIcon.svg";
import money from "../Assets/SVG/moneyIcon.svg";
import moneyT from "../Assets/SVG/moneyIconT.svg";
import chart from "../Assets/SVG/chartIcon.svg";
import percentage from "../Assets/SVG/percentageIcon.svg";
import savings from "../Assets/SVG/savingsIcon.svg";
import backgorund from "../Assets/SVG/dashboardBackground.svg";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import SendMoney from "../Components/SendMoney";
import menu from "../Assets/SVG/menuW.svg";
import { useMediaQuery } from "@chakra-ui/react";
import moneySend from "../Assets/SVG/money-send.svg";
import { useSelector } from "react-redux";
import TransactionData from "../Utilities/TransactionData";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [transaction, setTransaction] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const btnRef = React.useRef();
  const userInfo = useSelector((state) => state.user);
  const transactionData = useSelector((state) => state.transactions);
  // const calculateTotalAmount = () => {
  //   if (transactionData.length > 0) {
  //     return transactionData.reduce((sum, transaction) => {
  //       const transactionAmount = Number(transaction.amount) || 0;
  //       return sum + transactionAmount;
  //     }, 0);
  //   } else {
  //     return 0; // Return 0 if there are no transactions
  //   }
  // };

  // const totalAmount = calculateTotalAmount();

  const balance = userInfo.amount + userInfo.euro;

  useEffect(() => {
    if (transactionData.length > 0) {
      setTransaction(true);
    }
  }, [transactionData]);

  const updateBalance = balance - transactionData[0]?.amount;
  // const reloginBalance = balance - totalAmount;
  // console.log(transactionData[0].amount);

  //get current date in this format : june, 10, 2023
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  const currentDate = `${month}, ${day}, ${year}`;

  return (
    <Box margin="0">
      <Box
        backgroundImage={backgorund}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        paddingX={{ base: "3%", md: "5%" }}
        height="550px"
      >
        {isMobile ? (
          <Flex
            paddingX={{ base: "1%", md: "10%" }}
            paddingTop="3%"
            justifyContent="space-between"
          >
            <Box flex="1">
              <Image width="50%" src={logo} />
            </Box>
            <Menu>
              <MenuButton
                marginRight="-5%"
                backgroundColor="white"
                as={Button}
                bgColor="#558800"
              >
                <Image src={menu} />
              </MenuButton>
              <MenuList>
                <MenuItem width="100%">
                  <Link to="/dashboard">Overview</Link>
                </MenuItem>
                <MenuItem width="100%">
                  <Link to="/account">Account</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/transactions">Transactions</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          <Flex paddingY="1%">
            <Box flex="1">
              <Image src={logo} alt="Regions Logo" />
            </Box>

            <Flex
              paddingX="20%"
              alignItems="center"
              flex="2"
              justifyContent="space-between"
              color="white"
            >
              <Text backgroundColor="#88BB00" padding="2% 4%">
                <Link to="/dashboard">Overview</Link>
              </Text>
              <Text>
                <Link to="/account">Account</Link>
              </Text>
              <Text>
                <Link to="/transactions">Transactions</Link>
              </Text>
            </Flex>

            <Flex flex="1" justifyContent="flex-end" alignItems="center">
              <Image width="10%" marginRight="7%" src={notification} />
              <Image marginRight="7%" src={line} />
              <Image width="10%" marginRight="7%" src={settings} />
              <Image width="10%" marginRight="7%" src={user} />
            </Flex>
          </Flex>
        )}

        <Box paddingY="5%" color="white" marginTop={{ base: "1%", md: "0" }}>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box flex="1">
              <Text fontSize={{ base: "16px", md: "22px" }} fontWeight="600">
                Welcome, {userInfo.fullName}
              </Text>
              <Text marginTop={{ base: "5%", md: "5%" }}>Total Balance</Text>

              {transaction ? (
                <Text color="#F9F9F9" fontSize="42px" fontWeight="600">
                  ${updateBalance.toLocaleString()}
                </Text>
              ) : (
                <Text color="#F9F9F9" fontSize="42px" fontWeight="600">
                  ${balance.toLocaleString()}
                </Text>
              )}

              <Text fontSize="14px" fontWeight="light">
                $325.32 today, {currentDate}
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

              <Flex margin={{ base: "4% 0", md: "0" }}>
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
                  size={{ base: "sm", md: "sm" }}
                >
                  <DrawerOverlay />
                  <DrawerContent overflowY="auto" width="150%">
                    <SendMoney
                      onCloseButtonClick={onClose}
                      balance={userInfo.amount}
                      euro={userInfo.euro}
                    />
                  </DrawerContent>
                </Drawer>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box marginTop={{ base: "-40%", md: "-8%" }}>
        <Flex alignItems="center" marginX="5%" marginBottom="10px">
          <Image marginX="5px" src={chart} />
          <Text marginX="5px" fontSize="16px" color="white">
            Overview
          </Text>
          <Text
            marginX="5px"
            fontSize="12px"
            fontWeight="500"
            color="lightgrey"
          >
            Last 30 days
          </Text>
        </Flex>

        <Flex color="white" flexDirection={{ base: "column", md: "row" }}>
          <Box
            height="250px"
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
            padding={{ base: "4% 6%", md: "2.5% 2%" }}
            flex="1"
            marginX="5%"
            marginY="10px"
            color="black"
            backgroundColor="white"
          >
            <Image src={money} />
            <Flex alignItems="center" marginTop="5%">
              <Text>Domestic account</Text>
              <Image marginX="2%" src={percentage} />
              <Text fontSize="12px">12.5%</Text>
            </Flex>
            {transaction ? (
              <Text fontSize="32px" marginTop="5%" fontWeight="600">
                ${updateBalance.toLocaleString()}
              </Text>
            ) : (
              <Text fontSize="32px" marginTop="5%" fontWeight="600">
                ${balance.toLocaleString()}
              </Text>
            )}
          </Box>
          <Box
            height="250px"
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
            padding={{ base: "4% 6%", md: "2.5% 2%" }}
            flex="1"
            marginX="5%"
            marginY="10px"
            color="black"
            backgroundColor="white"
          >
            <Image src={moneyT} />
            <Flex marginTop="5%" alignItems="center">
              <Text>Euro account</Text>
              <Image marginX="2%" src={percentage} />
              <Text fontSize="12px">6.2%</Text>
            </Flex>
            <Text fontSize="32px" marginTop="5%" fontWeight="600">
              ${userInfo.euro.toLocaleString()}
            </Text>
          </Box>
          <Box
            height="250px"
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
            padding={{ base: "4% 6%", md: "2.5% 2%" }}
            flex="1"
            marginX="5%"
            marginY="10px"
            color="black"
            backgroundColor="white"
          >
            <Image src={savings} />
            <Flex marginTop="5%" alignItems="center">
              <Text>Savings account</Text>
            </Flex>
            <Text fontSize="32px" marginTop="5%" fontWeight="600">
              ${userInfo.savings.toLocaleString()}
            </Text>
          </Box>
        </Flex>

        <Box>
          <Flex marginTop={{ base: "5%", md: "2%" }} marginX="5%">
            <Text flex="1" fontSize={{ base: "14px", md: "20px" }}>
              Recent Transaction
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="medium"
              color="green"
              flex="1"
              textAlign="right"
            >
              <Link to="/transactions">View all</Link>
            </Text>
          </Flex>

          <TransactionData />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
