import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tr,
  Th,
  Td,
  TableContainer,
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
import financialData from "../Utilities/TransactionData";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import SendMoney from "../Components/SendMoney";
import menu from "../Assets/SVG/menuW.svg";
import { useMediaQuery } from "@chakra-ui/react";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
              <Image src={logo} />
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
                Overview
              </Text>
              <Text>Accounts</Text>
              <Text>Transactions</Text>
              <Text>Cards</Text>
            </Flex>

            <Flex flex="1" justifyContent="flex-end" alignItems="center">
              <Image width="10%" marginRight="7%" src={notification} />
              <Image marginRight="7%" src={line} />
              <Image width="10%" marginRight="7%" src={settings} />
              <Image width="10%" marginRight="7%" src={user} />
            </Flex>
          </Flex>
        )}

        <Box paddingY="5%" color="white" marginTop={{ base: "5%", md: "0" }}>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box flex="1">
              <Text>Total Balance</Text>
              <Text fontSize="42px" fontWeight="600">
                $42,456.00
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
                height="40%"
                src={line}
              />

              <Flex marginTop={{ base: "10%", md: "0" }}>
                <Button
                  ref={btnRef}
                  onClick={onOpen}
                  marginRight="2%"
                  backgroundColor="#88BB00"
                  borderRadius="25px"
                  color="white"
                  padding="2% 4%"
                  flex="1"
                >
                  Send Money
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size={{base: "xs", md: "sm"}}
                >
                  <DrawerOverlay />
                  <DrawerContent width="150%">
                    <SendMoney />
                  </DrawerContent>
                </Drawer>
                <Button
                  backgroundColor="rgba(0, 0, 0, 0.15)"
                  variant="ghost"
                  borderRadius="25px"
                  color="white"
                  padding="2% 4%"
                  flex="1"
                >
                  Add Money
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box marginTop={{ base: "-35%", md: "-10" }}>
        <Flex alignItems="center" marginX="5%" marginBottom="2%">
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
            padding={{base: "4% 6%",md:"2.5% 2%"}}
            flex="1"
            marginX="5%"
            marginY="2%"
            color="black"
            backgroundColor="white"
          >
            <Image src={money} />
            <Flex alignItems="center" marginTop="5%">
              <Text>Domestic account</Text>
              <Image marginX="2%" src={percentage} />
              <Text fontSize="12px">12.5%</Text>
            </Flex>
            <Text fontSize="32px" marginTop="5%" fontWeight="600">
              $32,674.01
            </Text>
          </Box>
          <Box
            height="250px"
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
            padding={{base: "4% 6%",md:"2.5% 2%"}}
            flex="1"
            marginX="5%"
            marginY="2%"
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
              $15,674.01
            </Text>
          </Box>
          <Box
            height="250px"
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
            padding={{base: "4% 6%",md:"2.5% 2%"}}
            flex="1"
            marginX="5%"
            marginY="2%"
            color="black"
            backgroundColor="white"
          >
            <Image src={savings} />
            <Flex marginTop="5%" alignItems="center">
              <Text>Savings account</Text>
            </Flex>
            <Text fontSize="32px" marginTop="5%" fontWeight="600">
              $32,674.01
            </Text>
          </Box>
        </Flex>

        <Box>
          <Flex marginTop={{base: "5%",md:"2%"}} marginX="5%">
            <Text flex="1" fontSize={{base: "14px",md:"20px"}}>
              Recent Transaction
            </Text>
            <Text
              fontSize={{base: "12px",md:"14px"}}
              fontWeight="medium"
              color="green"
              flex="1"
              textAlign="right"
            >
              <Link to="/transactions">View all</Link>
            </Text>
          </Flex>
          <TableContainer marginX="5%" marginTop="1%">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Account</Th>
                  <Th>Name</Th>
                  <Th>Reference No</Th>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th>Debit</Th>
                  <Th>Credit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {financialData.slice(0, 6).map((transaction, index) => (
                  <Tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "white" : "#EAFEC8",
                    }}
                  >
                    <Td>{transaction.Account}</Td>
                    <Td>{transaction.Name}</Td>
                    <Td>{transaction.ReferenceNo}</Td>
                    <Td>{transaction.Date}</Td>
                    <Td>{transaction.Description}</Td>
                    <Td color="#880000">${transaction.Debit}</Td>
                    <Td color="#558800">${transaction.Credit}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
