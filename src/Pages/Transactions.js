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
  Spacer,
  Input,
  Select,
} from "@chakra-ui/react";
import logo from "../Assets/SVG/logoW.svg";
import notification from "../Assets/SVG/notificationIcon.svg";
import user from "../Assets/SVG/userIcon.svg";
import settings from "../Assets/SVG/settingsIcon.svg";
import line from "../Assets/SVG/lineIcon.svg";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import menu from "../Assets/SVG/menuW.svg";
import filter from "../Assets/SVG/filter.svg";
import { useSelector } from "react-redux";

const Transactions = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const userInfo = useSelector((state) => state.user);

  const seedrandom = require("seedrandom");

  // Set a seed value (you can change this to any string you like)
  const seed = "mySeed123";

  // Use seedrandom to create a seeded random number generator
  const rng = seedrandom(seed);

  // Function to get a consistent random amount
  const getRandomAmount = () => (rng() * 1000).toFixed(2);
  const financialData = [
    {
      Account: 987654,
      Name: "Martins Richman",
      ReferenceNo: "212ii75i908621",
      Date: "2023-11-30",
      Description: "Consultation Fee",
      Debit: 0.0,
      Credit: userInfo.amount,
    },
    {
      Account: 123456,
      Name: "John Trevor",
      ReferenceNo: "686dgj87509753",
      Date: "2023-11-30",
      Description: "Payment for Services",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 789012,
      Name: "Jane Smith",
      ReferenceNo: "943vds8975986412",
      Date: "2023-11-29",
      Description: "Product Purchase",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 456789,
      Name: "Bob Johnson",
      ReferenceNo: "098jur85289632",
      Date: "2023-11-29",
      Description: "Rent Payment",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 654321,
      Name: "Eva Wilson",
      ReferenceNo: "874jiyu97500975",
      Date: "2023-11-28",
      Description: "Office Supplies",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 123789,
      Name: "David Lee",
      ReferenceNo: "063xwr3211263894",
      Date: "2023-11-27",
      Description: "Salary Deposit",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 456123,
      Name: "Sara Davis",
      ReferenceNo: "PQR678",
      Date: "2023-11-26",
      Description: "Advertising Expense",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 789456,
      Name: "Michael Johnson",
      ReferenceNo: "STU901",
      Date: "2023-11-26",
      Description: "Loan Repayment",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 321654,
      Name: "Laura White",
      ReferenceNo: "VWX234",
      Date: "2023-11-23",
      Description: "Travel Expenses",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 654987,
      Name: "Chris Taylor",
      ReferenceNo: "YZA567",
      Date: "2023-11-20",
      Description: "Dividend Income",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 111222,
      Name: "Emily Davis",
      ReferenceNo: "ABC789",
      Date: "2023-11-20",
      Description: "Consulting Fee",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 333444,
      Name: "Daniel Johnson",
      ReferenceNo: "XYZ456",
      Date: "2023-11-18",
      Description: "Product Sale",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 555666,
      Name: "Olivia White",
      ReferenceNo: "DEF123",
      Date: "2023-11-16",
      Description: "Expense Reimbursement",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 777888,
      Name: "Matthew Miller",
      ReferenceNo: "GHI456",
      Date: "2023-11-17",
      Description: "Equipment Purchase",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 999000,
      Name: "Sophia Anderson",
      ReferenceNo: "JKL789",
      Date: "2023-11-17",
      Description: "Freelance Income",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    // Additional transactions...
    {
      Account: 111333,
      Name: "William Brown",
      ReferenceNo: "MNO012",
      Date: "2023-11-1",
      Description: "Utility Bill Payment",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 444555,
      Name: "Emma Taylor",
      ReferenceNo: "PQR345",
      Date: "2023-11-20",
      Description: "Stock Purchase",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 666777,
      Name: "James Wilson",
      ReferenceNo: "STU678",
      Date: "2023-11-21",
      Description: "Marketing Expenses",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 888999,
      Name: "Ava Johnson",
      ReferenceNo: "VWX901",
      Date: "2023-11-22",
      Description: "Client Payment",
      Debit: 0.0,
      Credit: 1000.0,
    },
    {
      Account: 222333,
      Name: "Noah Davis",
      ReferenceNo: "YZA234",
      Date: "2023-11-23",
      Description: "Training Fee",
      Debit: 0.0,
      Credit: 350.0,
    },
    {
      Account: 555444,
      Name: "Grace White",
      ReferenceNo: "BCD567",
      Date: "2023-11-24",
      Description: "Rent Expense",
      Debit: 700.0,
      Credit: 0.0,
    },
    {
      Account: 777666,
      Name: "Ethan Miller",
      ReferenceNo: "EFG890",
      Date: "2023-11-25",
      Description: "Website Development",
      Debit: 0.0,
      Credit: 900.0,
    },
    {
      Account: 999888,
      Name: "Isabella Anderson",
      ReferenceNo: "HIJ123",
      Date: "2023-11-26",
      Description: "Insurance Premium",
      Debit: 550.0,
      Credit: 0.0,
    },
    {
      Account: 333222,
      Name: "Liam Brown",
      ReferenceNo: "KLM456",
      Date: "2023-11-27",
      Description: "Conference Registration",
      Debit: 0.0,
      Credit: 250.0,
    },
    {
      Account: 666999,
      Name: "Sophie Taylor",
      ReferenceNo: "NOP789",
      Date: "2023-11-28",
      Description: "Software Subscription",
      Debit: 150.0,
      Credit: 0.0,
    },
    {
      Account: 888111,
      Name: "Jackson Wilson",
      ReferenceNo: "QRS012",
      Date: "2023-11-29",
      Description: "Repair Expenses",
      Debit: 400.0,
      Credit: 0.0,
    },
    {
      Account: 222444,
      Name: "Chloe Johnson",
      ReferenceNo: "TUV345",
      Date: "2023-11-30",
      Description: "Royalty Income",
      Debit: 0.0,
      Credit: 200.0,
    },
    // Add more objects for additional transactions
  ];

  return (
    <Box>
      <Box backgroundColor="#558800" paddingX="5%">
        <Flex paddingY="1%">
          {isMobile ? (
            <Flex
              paddingX={{ base: "1%", md: "10%" }}
              paddingY="3%"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Text marginRight="5%" color="white">
                <Link to="/dashboard">Back</Link>
              </Text>
              <Spacer />
              <Box>
                <Image width="80%" src={logo} />
              </Box>
              <Spacer />
              <Flex justifyContent="flex-end">
                <Menu>
                  <MenuButton
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
            </Flex>
          ) : (
            <Flex
              flex="1"
              width="100%"
              justifyContent="space-between"
              paddingY="1%"
            >
              <Box>
                <Image src={logo} alt="Regions Logo" />
              </Box>

              <Flex
                paddingX="20%"
                alignItems="center"
                color="white"
                flex="2"
                justifyContent="space-between"
              >
                <Text marginX="2%">
                  <Link to="/dashboard">Overview</Link>
                </Text>
                <Text>
                  <Link to="/account">Account</Link>
                </Text>
                <Text backgroundColor="#88BB00" padding="2% 4%">
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
        </Flex>
      </Box>
      <Flex
        paddingX={{ base: "5%", md: "5%" }}
        paddingY={{ base: "5%", md: "3%" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "left", md: "center" }}
      >
        <Text
          marginRight={{ base: "1%", md: "3%" }}
          color="#272727"
          fontWeight="500"
        >
          Transaction
        </Text>
        <Input
          placeholder="Search Transactions"
          fontSize="14px"
          borderRadius="30px"
          marginTop={{ base: "2%", md: "10px" }}
        />
        <Flex
          marginLeft={{ base: "0px", md: "2%" }}
          borderRadius={{ base: "20px", md: "20px" }}
          border="1px solid #558800"
          width="fit-content"
          padding={{ base: "2px 4px", md: "2px 2%" }}
          color="#558800"
          alignItems="center"
          marginTop={{ base: "3%", md: "10px" }}
        >
          <Image src={filter} />
          <Select border="none" size="sm" width="110px" fontSize="16px">
            <option value="option1">Filter</option>
            <option value="option2">Nov</option>
            <option value="option3">Oct</option>
            <option value="option4">Sept</option>
            <option value="option5">Aug</option>
            <option value="option6">July</option>
            <option value="option7">Jun</option>
            <option value="option8">May</option>
            <option value="option9">Apr</option>
            <option value="option10">Mar</option>
            <option value="option11">Feb</option>
            <option value="option12">Jan</option>
          </Select>
        </Flex>
      </Flex>
      {isMobile ? (
        <TableContainer marginX="2%" marginTop="1%">
          <Table size="sm">
            <Thead>
              <Tr width="fit-content">
                <Th width="fit-content">November</Th>
              </Tr>
            </Thead>
            <Tbody>
              {financialData.map((transaction, index) => (
                <Tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "#EAFEC8",
                  }}
                >
                  <Flex>
                    <Flex
                      flex="1"
                      padding="3% 1%"
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      <Td fontWeight="500" fontSize="16px" border="none">
                        {transaction.Name}
                      </Td>
                      <Td color="#838383" fontSize="12px" border="none">
                        {transaction.Date}
                      </Td>
                    </Flex>

                    <Flex
                      flex="1"
                      padding="3% 2%"
                      flexDirection={{ base: "column", md: "row" }}
                      justifyContent="flex-end"
                    >
                      {transaction.Debit === 0 ? null : (
                        <Td
                          textAlign="right"
                          border="none"
                          color="#880000"
                          fontSize="16px"
                          fontWeight="500"
                        >
                          ${transaction.Debit}
                        </Td>
                      )}
                      {transaction.Credit === 0 ? null : (
                        <Td
                          textAlign="right"
                          border="none"
                          fontSize="16px"
                          color="#558800"
                          fontWeight="500"
                        >
                          ${transaction.Credit}
                        </Td>
                      )}
                      <Td fontWeight="500" fontSize="16px" border="none">
                        {transaction.Description}
                      </Td>
                    </Flex>
                  </Flex>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer marginX="5%" marginTop="1%">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Reference No</Th>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {financialData.map((transaction, index) => (
                <Tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "#EAFEC8",
                  }}
                >
                  <Td padding="2% 2%">{transaction.Name}</Td>
                  <Td>{transaction.ReferenceNo}</Td>
                  <Td color="#838383">{transaction.Date}</Td>
                  <Td>{transaction.Description}</Td>
                  {transaction.Debit === 0 ? null : (
                    <Td color="#880000" fontSize="16px" fontWeight="500">
                      ${transaction.Debit}
                    </Td>
                  )}
                  {transaction.Credit === 0 ? null : (
                    <Td fontSize="16px" color="#558800" fontWeight="500">
                      ${transaction.Credit}
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Transactions;
