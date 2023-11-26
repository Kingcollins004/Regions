import React from "react";
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const TransactionData = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const userInfo = useSelector((state) => state.user);
  const transactionData = useSelector((state) => state.transactions);

  const financialData = [
    {
      Account: 123456,
      Name: "John Trevor",
      ReferenceNo: "ABC123",
      Date: "2023-11-04",
      Description: "Payment for Services",
      Debit: 500.0,
      Credit: 0.0,
    },
    {
      Account: 789012,
      Name: "Jane Smith",
      ReferenceNo: "XYZ789",
      Date: "2023-11-05",
      Description: "Product Purchase",
      Debit: 0.0,
      Credit: 300.0,
    },
    {
      Account: 456789,
      Name: "Bob Johnson",
      ReferenceNo: "DEF456",
      Date: "2023-11-06",
      Description: "Rent Payment",
      Debit: 800.0,
      Credit: 0.0,
    },
    {
      Account: 987654,
      Name: "IC Holding construction",
      ReferenceNo: "GHI789",
      Date: "2023-11-07",
      Description: "Consultation Fee",
      Debit: 0.0,
      Credit: userInfo.amount,
    },
    {
      Account: 654321,
      Name: "Eva Wilson",
      ReferenceNo: "JKL012",
      Date: "2023-11-08",
      Description: "Office Supplies",
      Debit: 200.0,
      Credit: 0.0,
    },
    {
      Account: 123789,
      Name: "David Lee",
      ReferenceNo: "MNO345",
      Date: "2023-11-09",
      Description: "Salary Deposit",
      Debit: 0.0,
      Credit: 7500.0,
    },
    {
      Account: 456123,
      Name: "Sara Davis",
      ReferenceNo: "PQR678",
      Date: "2023-11-10",
      Description: "Advertising Expense",
      Debit: 300.0,
      Credit: 0.0,
    },
    {
      Account: 789456,
      Name: "Michael Johnson",
      ReferenceNo: "STU901",
      Date: "2023-11-11",
      Description: "Loan Repayment",
      Debit: 0.0,
      Credit: 1000.0,
    },
    {
      Account: 321654,
      Name: "Laura White",
      ReferenceNo: "VWX234",
      Date: "2023-11-12",
      Description: "Travel Expenses",
      Debit: 600.0,
      Credit: 0.0,
    },
    {
      Account: 654987,
      Name: "Chris Taylor",
      ReferenceNo: "YZA567",
      Date: "2023-11-13",
      Description: "Dividend Income",
      Debit: 0.0,
      Credit: 120.0,
    },
    {
      Account: 111222,
      Name: "Emily Davis",
      ReferenceNo: "ABC789",
      Date: "2023-11-14",
      Description: "Consulting Fee",
      Debit: 0.0,
      Credit: 400.0,
    },
    {
      Account: 333444,
      Name: "Daniel Johnson",
      ReferenceNo: "XYZ456",
      Date: "2023-11-15",
      Description: "Product Sale",
      Debit: 0.0,
      Credit: 700.0,
    },
    {
      Account: 555666,
      Name: "Olivia White",
      ReferenceNo: "DEF123",
      Date: "2023-11-16",
      Description: "Expense Reimbursement",
      Debit: 200.0,
      Credit: 0.0,
    },
    {
      Account: 777888,
      Name: "Matthew Miller",
      ReferenceNo: "GHI456",
      Date: "2023-11-17",
      Description: "Equipment Purchase",
      Debit: 1200.0,
      Credit: 0.0,
    },
    {
      Account: 999000,
      Name: "Sophia Anderson",
      ReferenceNo: "JKL789",
      Date: "2023-11-18",
      Description: "Freelance Income",
      Debit: 0.0,
      Credit: 600.0,
    },
    // Additional transactions...
    {
      Account: 111333,
      Name: "William Brown",
      ReferenceNo: "MNO012",
      Date: "2023-11-19",
      Description: "Utility Bill Payment",
      Debit: 450.0,
      Credit: 0.0,
    },
    {
      Account: 444555,
      Name: "Emma Taylor",
      ReferenceNo: "PQR345",
      Date: "2023-11-20",
      Description: "Stock Purchase",
      Debit: 0.0,
      Credit: 800.0,
    },
    {
      Account: 666777,
      Name: "James Wilson",
      ReferenceNo: "STU678",
      Date: "2023-11-21",
      Description: "Marketing Expenses",
      Debit: 300.0,
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
    <div>
      {isMobile ? (
        <TableContainer marginX="2%" marginTop="3%">
          <Table size="sm">
            <Thead>
              <Tr width="fit-content">
                <Text marginX="3%" width="fit-content">
                  Month: November
                </Text>
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
                            ${transaction.amount} - Debit
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
                  // ... rest of the code
                );
              })}

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
                      <Td fontWeight="500" fontSize="14px" border="none">
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
                          fontSize="14px"
                          fontWeight="500"
                        >
                          ${transaction.Debit} - Debit
                        </Td>
                      )}
                      {transaction.Credit === 0 ? null : (
                        <Td
                          textAlign="right"
                          border="none"
                          fontSize="14px"
                          color="#558800"
                          fontWeight="500"
                        >
                          ${transaction.Credit} - Credit
                        </Td>
                      )}
                      <Td
                        fontWeight="500"
                        textAlign="right"
                        fontSize="14px"
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
                  <Td padding={{ base: "3% 2%", md: "2%" }} fontWeight="500">
                    {transaction.Name}
                  </Td>
                  <Td>{transaction.ReferenceNo}</Td>
                  <Td color="#838383">{transaction.Date}</Td>
                  <Td>{transaction.Description}</Td>

                  {transaction.Debit === 0 ? null : (
                    <Td color="#880000" fontSize="16px" fontWeight="500">
                      ${transaction.Debit} - Debit
                    </Td>
                  )}
                  {transaction.Credit === 0 ? null : (
                    <Td fontSize="16px" color="#558800" fontWeight="500">
                      ${transaction.Credit} - Credit
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TransactionData;
