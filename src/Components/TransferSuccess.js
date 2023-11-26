import { Image, Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/SVG/regionsLogo.svg";
import tranferImg from "../Assets/SVG/transferImg.svg";
import { useDispatch } from "react-redux";
import { updateTransactionHistory } from "../Feature/action";

const TransferSuccess = (props) => {
  const dispatch = useDispatch();

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();

    // Format the date as "dd-mm-yyyy"
    const formattedDate = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    return formattedDate;
  };

  const date = getCurrentDate();

  const handleSuccess = () => {
    const transactionData = {
      date: date,
      description: props.description,
      amount: props.amount,
      name: props.name,
      accountNum: props.accountNum,
    };
    dispatch(updateTransactionHistory(transactionData));
    window.location.reload();
  };
  return (
    <div>
      <Box>
        <Flex marginY="10%" flexDirection="column" alignItems="center">
          <Image src={logo} />
          <Image src={tranferImg} />
          <Text fontSize="16px" fontWeight="700" marginY="2%">
            Transfer Successful
          </Text>
          <Text>Payment Reciept</Text>
        </Flex>

        <Flex marginY="10%">
          <Box>
            <Text>Account Name</Text>
            <Text fontSize="16px" fontWeight="600">
              {props.name}
            </Text>
          </Box>
          <Spacer />
          <Box textAlign="right">
            <Text>Account Number</Text>
            <Text fontSize="16px" fontWeight="600" textAlign="right">
              {props.accountNum}
            </Text>
          </Box>
        </Flex>

        <Flex marginY="10%">
          <Box>
            <Text>Payment Amount</Text>
            <Text fontSize="16px" color="#07593D">
              ${props.amount} - Success
            </Text>
          </Box>
          <Spacer />
          <Box textAlign="right">
            <Text>Currency</Text>
            <Text fontSize="16px" color="#07593D">
              USD
            </Text>
          </Box>
        </Flex>
        <Flex marginY="10%">
          <Box>
            <Text>Transaction Reference</Text>
            <Text fontSize="16px">948dh390db48592jsu382</Text>
          </Box>
          <Spacer />
          <Box textAlign="right">
            <Text>Payment Date</Text>
            <Text fontSize="16px" color="#07593D">
              {date}
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Button
            onClick={handleSuccess}
            width="100%"
            backgroundColor="#558800"
            color="white"
          >
            Close
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default TransferSuccess;
