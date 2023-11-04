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
  Tfoot,
  Input,
  Tr,
  Th,
  Td,
  TableContainer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Box
        backgroundImage={backgorund}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        paddingX="5%"
        height="500px"
      >
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

        <Box paddingY="5%" color="white">
          <Flex>
            <Box flex="1">
              <Text>Total Balance</Text>
              <Text fontSize="42px" fontWeight="600">
                $42,456.00
              </Text>
              <Text fontSize="14px" fontWeight="light">
                $325.32 today, Oct 31st
              </Text>
            </Box>

            <Flex flex="1" justifyContent="flex-end" alignItems="center">
              <Text marginRight="5%">View Analytics</Text>
              <Image marginRight="5%" height="40%" src={line} />

              <Button
                ref={btnRef}
                onClick={onOpen}
                marginRight="2%"
                backgroundColor="#88BB00"
                borderRadius="25px"
                color="white"
                padding="2% 4%"
              >
                Send Money
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="sm"
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
              >
                Add Money
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box marginTop="-10%">
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

        <Flex color="white">
          <Box
            height="250px"
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
            padding="2.5% 2%"
            flex="1"
            marginX="5%"
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
            padding="2.5% 2%"
            flex="1"
            marginX="5%"
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
            padding="2.5% 2%"
            flex="1"
            marginX="5%"
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
          <Flex marginTop="2%" marginX="5%">
            <Text flex="1" fontSize="20px">
              Recent Transaction
            </Text>
            <Text
              fontSize="14px"
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
