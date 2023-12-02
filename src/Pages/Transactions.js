import React, { useState } from "react";
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
import getCompleteFinancialData from "../completeFinancialData";


const Transactions = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  // const userInfo = useSelector((state) => state.user);
  const transactionData = useSelector((state) => state.transactions);
  const [selectedMonth, setSelectedMonth] = useState("December");
  const [financialData, setFinancialData] = useState([]);

  const completeFinancialData = getCompleteFinancialData();

  console.log(completeFinancialData);

  const seedrandom = require("seedrandom");

  // Set a seed value (you can change this to any string you like)
  const seed = "mySeed123";

  // Use seedrandom to create a seeded random number generator
  const rng = seedrandom(seed);

  // Function to get a consistent random amount

  const reference = () => (rng() * 1000000000000).toFixed(0);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    filterTransactions(selectedMonth);
  };

  const filterTransactions = (selectedMonth) => {
    const filtered = completeFinancialData.filter(
      (transaction) =>
        new Date(transaction.Date).toLocaleString("default", {
          month: "long",
        }) === selectedMonth
    );
    console.log("Complete Financial Data:", completeFinancialData);
    console.log("Filtered Data:", filtered);
    setFinancialData(filtered);
  };

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
          padding={{ base: "2px 8px", md: "2px 3%" }}
          color="#558800"
          alignItems="center"
          marginTop={{ base: "3%", md: "10px" }}
        >
          <Image width="20%" src={filter} />
          <Select
            onChange={handleMonthChange}
            value={selectedMonth}
            border="none"
            size="sm"
            width="110px"
            fontSize="16px"
            _focus={{ boxShadow: "none" }}
          >
            <option value="option1">Filter</option>
            <option value="December">Dec</option>
            <option value="November">Nov</option>
            <option value="October">Oct</option>
            <option value="September">Sept</option>
            <option value="August">Aug</option>
            <option value="July">July</option>
            <option value="June">Jun</option>
            <option value="May">May</option>
            <option value="April">Apr</option>
            <option value="March">Mar</option>
            <option value="Febuary">Feb</option>
            <option value="January">Jan</option>
          </Select>
        </Flex>
      </Flex>
      {isMobile ? (
        <TableContainer marginX="2%" marginTop="1%">
          <Table size="sm">
            <Thead>
              <Tr width="fit-content">
                <Th width="fit-content">{selectedMonth}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[...transactionData].reverse().map((transaction, index) => {
                return (
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
                        <Td fontWeight="500" fontSize="14px" border="none">
                          {transaction.name}
                        </Td>
                        <Td color="#838383" fontSize="12px" border="none">
                          {transaction.date}
                        </Td>
                      </Flex>

                      <Flex
                        flex="1"
                        padding="3% 2%"
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent="flex-end"
                      >
                        {transaction.debit === 0 ? null : (
                          <Td
                            textAlign="right"
                            border="none"
                            color="#880000"
                            fontSize="14px"
                            fontWeight="500"
                          >
                            - ${transaction.amount}
                          </Td>
                        )}

                        <Td
                          fontWeight="500"
                          textAlign="right"
                          fontSize="14px"
                          border="none"
                        >
                          {transaction.description}
                        </Td>
                      </Flex>
                    </Flex>
                  </Tr>
                );
              })}

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
                          - ${transaction.Debit}
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
                          + ${transaction.Credit}
                        </Td>
                      )}
                      <Td
                        textAlign="right"
                        fontWeight="500"
                        fontSize="16px"
                        border="none"
                      >
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
              {[...transactionData].reverse().map((transaction, index) => {
                return (
                  <Tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "white" : "#EAFEC8",
                    }}
                  >
                    <Td padding={{ base: "3% 2%", md: "2%" }} fontWeight="500">
                      {transaction.name}
                    </Td>
                    <Td>{parseFloat(reference())}</Td>
                    <Td color="#838383">{transaction.date}</Td>
                    <Td>{transaction.description}</Td>

                    {transaction.Debit === 0 ? null : (
                      <Td color="#880000" fontSize="16px" fontWeight="500">
                        - ${transaction.amount}
                      </Td>
                    )}
                  </Tr>
                );
              })}
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
                      - ${transaction.Debit}
                    </Td>
                  )}
                  {transaction.Credit === 0 ? null : (
                    <Td fontSize="16px" color="#558800" fontWeight="500">
                      + ${transaction.Credit}
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
