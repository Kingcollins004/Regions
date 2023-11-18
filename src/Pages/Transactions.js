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
import financialData from "../Utilities/TransactionData";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import menu from "../Assets/SVG/menuW.svg";
import filter from "../Assets/SVG/filter.svg";

const Transactions = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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
                    marginRight="-100%"
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
                    <MenuItem>
                      <Link to="/cards">Cards</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
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
                <Text>
                  <Link to="/dashboard">Overview</Link>
                </Text>
                <Text>
                  <Link to="/account">Account</Link>
                </Text>
                <Text backgroundColor="#88BB00" padding="2% 4%">
                  <Link to="/transactions">Transactions</Link>
                </Text>
                <Text>
                  <Link to="/cards">Cards</Link>
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
                <Th width="fit-content">Nov</Th>
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
