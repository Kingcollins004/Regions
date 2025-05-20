import React from "react";
import {
  Flex,
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
  const seedrandom = require("seedrandom");

  // Set a seed value (you can change this to any string you like)
  const seed = "mySeed123";

  // Use seedrandom to create a seeded random number generator
  const rng = seedrandom(seed);

  // Function to get a consistent random amount
  const getRandomAmount = () => (rng() * 1000).toFixed(2);
  const reference = () => (rng() * 1000000000000).toFixed(0);

  // const financialData = [
  //   {
  //     Account: 987654,
  //     Name: "Martins Richman",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-30",
  //     Description: "Consultation Fee",
  //     Debit: 0.0,
  //     Credit: userInfo.amount,
  //   },
  //   {
  //     Account: 123456,
  //     Name: "John Trevor",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-30",
  //     Description: "Payment for Services",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 789012,
  //     Name: "Jane Smith",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-29",
  //     Description: "Product Purchase",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 456789,
  //     Name: "Bob Johnson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-29",
  //     Description: "Rent Payment",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 654321,
  //     Name: "Eva Wilson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-28",
  //     Description: "Office Supplies",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 123789,
  //     Name: "David Lee",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-27",
  //     Description: "Salary Deposit",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 456123,
  //     Name: "Sara Davis",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-26",
  //     Description: "Advertising Expense",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 789456,
  //     Name: "Michael Johnson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-26",
  //     Description: "Loan Repayment",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 321654,
  //     Name: "Laura White",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-23",
  //     Description: "Travel Expenses",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 654987,
  //     Name: "Chris Taylor",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-20",
  //     Description: "Dividend Income",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 111222,
  //     Name: "Emily Davis",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-20",
  //     Description: "Consulting Fee",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 333444,
  //     Name: "Daniel Johnson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-18",
  //     Description: "Product Sale",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 555666,
  //     Name: "Olivia White",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-16",
  //     Description: "Expense Reimbursement",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 777888,
  //     Name: "Matthew Miller",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-17",
  //     Description: "Equipment Purchase",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 999000,
  //     Name: "Sophia Anderson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-17",
  //     Description: "Freelance Income",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   // Additional transactions...
  //   {
  //     Account: 111333,
  //     Name: "William Brown",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-1",
  //     Description: "Utility Bill Payment",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 444555,
  //     Name: "Emma Taylor",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-20",
  //     Description: "Stock Purchase",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 666777,
  //     Name: "James Wilson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-21",
  //     Description: "Marketing Expenses",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 888999,
  //     Name: "Ava Johnson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-22",
  //     Description: "Client Payment",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 222333,
  //     Name: "Noah Davis",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-23",
  //     Description: "Training Fee",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 555444,
  //     Name: "Grace White",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-24",
  //     Description: "Rent Expense",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 777666,
  //     Name: "Ethan Miller",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-25",
  //     Description: "Website Development",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   {
  //     Account: 999888,
  //     Name: "Isabella Anderson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-26",
  //     Description: "Insurance Premium",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 333222,
  //     Name: "Liam Brown",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-27",
  //     Description: "Conference Registration",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 666999,
  //     Name: "Sophie Taylor",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-28",
  //     Description: "Software Subscription",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 888111,
  //     Name: "Jackson Wilson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-29",
  //     Description: "Repair Expenses",
  //     Debit: parseFloat(getRandomAmount()),
  //     Credit: 0.0,
  //   },
  //   {
  //     Account: 222444,
  //     Name: "Chloe Johnson",
  //     ReferenceNo: parseFloat(reference()),
  //     Date: "2025-11-30",
  //     Description: "Royalty Income",
  //     Debit: 0.0,
  //     Credit: parseFloat(getRandomAmount()),
  //   },
  //   // Add more objects for additional transactions
  // ];

  const financialData = [
    // {
    //   Account: 8474930,
    //   Name: "Jame Willson",
    //   ReferenceNo: parseFloat(reference()),
    //   Date: "2025-11-30",
    //   Description: "Housing Investing",
    //   Debit: 0.0,
    //   Credit: "2000000",
    // },
    // {
    //   Account: 8474930,
    //   Name: "Mercy Johnson",
    //   ReferenceNo: parseFloat(reference()),
    //   Date: "2025-11-30",
    //   Description: "Housing Investing",
    //   Debit: 0.0,
    //   Credit: "2000000",
    // },
    {
      Account: 987654,
      Name: "Martins Richman",
      ReferenceNo: parseFloat(reference().toLocaleString()),
      Date: "2025-05-12",
      Description: "Consultation Fee",
      Debit: 0.0,
      Credit: userInfo.amount,
    },

    {
      Account: 555666,
      Name: "Olivia White",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-05-09",
      Description: "Expense Reimbursement",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 777888,
      Name: "Matthew Miller",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-04-22",
      Description: "Equipment Purchase",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 999000,
      Name: "Sophia Anderson",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-04-22",
      Description: "Freelance Income",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    // Additional transactions...
    {
      Account: 111333,
      Name: "William Brown",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-04-21",
      Description: "Utility Bill Payment",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 444555,
      Name: "Emma Taylor",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-04-20",
      Description: "Stock Purchase",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 666777,
      Name: "James Wilson",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-04-18",
      Description: "Marketing Expenses",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 888999,
      Name: "Ava Johnson",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-04-17",
      Description: "Client Payment",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 222333,
      Name: "Noah Davis",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-03-23",
      Description: "Training Fee",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 555444,
      Name: "Grace White",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-03-24",
      Description: "Rent Expense",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 777666,
      Name: "Ethan Miller",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-02-25",
      Description: "Website Development",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    {
      Account: 999888,
      Name: "Isabella Anderson",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-01-26",
      Description: "Insurance Premium",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 333222,
      Name: "Liam Brown",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-11-27",
      Description: "Conference Registration",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 666999,
      Name: "Sophie Taylor",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-11-28",
      Description: "Software Subscription",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 888111,
      Name: "Jackson Wilson",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-11-29",
      Description: "Repair Expenses",
      Debit: parseFloat(getRandomAmount()),
      Credit: 0.0,
    },
    {
      Account: 222444,
      Name: "Chloe Johnson",
      ReferenceNo: parseFloat(reference()),
      Date: "2025-11-30",
      Description: "Royalty Income",
      Debit: 0.0,
      Credit: parseFloat(getRandomAmount()),
    },
    // Add more objects for additional transactions
  ];
  return (
    <div>
      {isMobile ? (
        <TableContainer marginX="2%" marginTop="3%">
          <Table size="sm">
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
                          - ${transaction.Debit}
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
                          + ${transaction.Credit}
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
    </div>
  );
};

export default TransactionData;
