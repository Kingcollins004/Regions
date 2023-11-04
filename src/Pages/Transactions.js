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
  Tr,
  Th,
  Td,
  TableContainer,
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
import financialData from "../Utilities/TransactionData";


const Transactions = () => {
  return (
    <Box>
      <Box backgroundColor="#558800" paddingX="5%">
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
      </Box>
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
              {financialData.map((transaction, index) => (
                <Tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#EAFEC8' }}>
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
  );
};

export default Transactions;
