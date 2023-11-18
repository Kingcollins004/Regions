import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import money from "../Assets/SVG/moneyIcon.svg";
import moneyT from "../Assets/SVG/moneyIconT.svg";
import chart from "../Assets/SVG/chartIcon.svg";
import percentage from "../Assets/SVG/percentageIcon.svg";
import savings from "../Assets/SVG/savingsIcon.svg";
import financialData from "../Utilities/TransactionData";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const DashboardComp = () => {
  const userInfo = useSelector((state) => state.user);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
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
            <Text fontSize="32px" marginTop="5%" fontWeight="600">
              ${userInfo.amount}
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
              $32,674.01
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
          {isMobile ? (
            <TableContainer marginX="2%" marginTop="3%">
              <Table size="sm">
                <Thead>
                  <Tr width="fit-content">
                    <Text marginX="3%" width="fit-content">
                      Month: Nov
                    </Text>
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
              <Table marginY={{ base: "7%", md: "2%" }} size="sm">
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
                  {financialData.slice(0, 6).map((transaction, index) => (
                    <Tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "white" : "#EAFEC8",
                      }}
                    >
                      <Td padding="3% 2%" fontWeight="500">
                        {transaction.Name}
                      </Td>
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
      </Box>
    </div>
  );
};

export default DashboardComp;
