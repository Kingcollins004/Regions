import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Input,
  Select,
  Button,
  HStack,
  PinInput,
  PinInputField,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import cancel from "../Assets/SVG/cancelIcon.svg";
import banksInAmerica from "../Utilities/BankNames";
import { useRef } from "react";

const SendMoney = ({ balance }) => {
  const { onClose } = useDisclosure();
  const [isSending, setIsSending] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputContainerRef = useRef(null);
  const [timer, setTimer] = useState(90);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleVerify = () => {
    setShowModal(true);
  };

  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    const inputFields = Array.from(inputContainerRef.current.children);
    if (value && index < inputFields.length - 1) {
      inputFields[index + 1].focus();
    }
  };

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleCodeKeyUp = (e) => {
    const keyCode = e.keyCode || e.which;
    const inputFields = Array.from(inputContainerRef.current.children);
    const currentIndex = inputFields.findIndex((input) => input === e.target);

    if (
      (keyCode >= 48 && keyCode <= 57) ||
      keyCode === 8 ||
      keyCode === 46 ||
      keyCode === 37
    ) {
      // Allow only digits, backspace, delete, and left arrow keys

      if (keyCode === 8 || keyCode === 46) {
        // Move to the previous input field when backspace or delete is pressed
        if (currentIndex > 0 && e.target.value === "") {
          inputFields[currentIndex - 1].focus();
        }
      } else if (keyCode === 37) {
        // Move to the previous input field when the left arrow key is pressed
        if (currentIndex > 0) {
          inputFields[currentIndex - 1].focus();
        }
      } else if (e.target.value !== "") {
        // Move to the next input field when the current field is filled
        if (currentIndex < inputFields.length - 1) {
          inputFields[currentIndex + 1].focus();
        }
      }
    } else {
      e.preventDefault();
    }
  };

  const handleClick = () => {
    setIsSending(true);
  };

  return (
    <div>
      {isSending ? (
        <Box paddingY="5%" paddingX="5%">
          <Flex alignItems="center">
            <Text flex="1" fontWeight="bold">
              Send Money
            </Text>
            <Flex flex="1" justifyContent="flex-end">
              <Image width="15%" src={cancel} />
            </Flex>
          </Flex>

          <Box
            textAlign="center"
            margin={{ base: "25% 5%", md: "5% 5%" }}
            padding="5%"
            borderRadius="20px"
            backgroundColor="white"
          >
            <Text
              fontSize={{ base: "20px", md: "30px" }}
              fontWeight="700"
              marginBottom="8%"
            >
              Verify Your Account
            </Text>
            <Text
              fontSize={{ base: "13px", md: "13px" }}
              color="#707070"
              marginBottom="8%"
            >
              A 4-digit OTP has been sent to your emaii address
              <span className="user-num"> ezecollins004@gmail.com</span>
            </Text>
            <Box marginBottom="8%" ref={inputContainerRef}>
              <Flex justifyContent="center">
                <HStack>
                  <PinInput otp>
                    {verificationCode.map((digit, index) => (
                      <PinInputField
                        key={index}
                        height="50px"
                        width="70px"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(e, index)}
                        onKeyUp={handleCodeKeyUp}
                      />
                    ))}
                  </PinInput>
                </HStack>
              </Flex>
            </Box>
            <Button
              background="#558800"
              marginTop="4%"
              color="#fff"
              variant="outline"
              width="100%"
              padding="7%"
              borderRadius="10px"
              fontSize="15px"
              marginBottom="5%"
              onClick={handleVerify}
            >
              Verify Account
            </Button>
            <Box color="#001233" fontSize="12px">
              {timer > 0 ? (
                <span>
                  Didn't receive an OTP?
                  <br /> Resend OTP in:{" "}
                  <span className="verifyTimer">
                    {formattedMinutes}:{formattedSeconds}
                  </span>
                </span>
              ) : (
                <button>Resend OTP</button>
              )}
            </Box>
          </Box>

          <Modal isOpen={showModal} onClose={closeModal}>
            <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.1)" />
            <ModalContent
              borderRadius="25px"
              padding="0.5%"
              backgroundColor="#30CF63"
              margin="600px 22% 0% 22%"
            >
              <ModalBody>
                <ModalCloseButton marginTop="-5px" color="white" />
                <Text fontSize={{ base: "12px", md: "16px" }} color="white">
                  Verification Successful.
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <Box paddingY="5%" paddingX="5%">
          <Flex alignItems="center">
            <Text flex="1" fontWeight="bold">
              Send Money
            </Text>
            <Flex flex="1" justifyContent="flex-end">
              <Image width="15%" src={cancel} />
            </Flex>
          </Flex>
          <Box marginTop="5%">
            <Text>Choose Account</Text>
            <Select size="lg" fontSize="14px" marginTop="3%">
              <option value="option1">
                Domestic Account - ${balance.toLocaleString()}
              </option>
              <option value="option2">Euro Account - $14,234.00</option>
            </Select>
          </Box>
          <Box marginTop="5%">
            <Text>Select Bank</Text>
            <Select size="lg" fontSize="14px" marginTop="3%">
              {banksInAmerica.map((bank, index) => (
                <option>{bank}</option>
              ))}
            </Select>
          </Box>
          <Box marginTop="5%">
            <Text>Beneficiary Account Number</Text>
            <Input padding="8% 2%" marginTop="3%" />
          </Box>
          <Box marginTop="5%">
            <Text>Amount</Text>
            <Input padding="8% 2%" marginTop="3%" />
          </Box>
          <Box marginTop="5%">
            <Text>Narration</Text>
            <Input padding="1% 2%" height="140px" marginTop="3%" />
          </Box>
          <Button
            marginTop="5%"
            backgroundColor="#558800"
            color="white"
            width="100%"
            padding="8% 0"
            onClick={handleClick}
          >
            Send
          </Button>
        </Box>
      )}
    </div>
  );
};

export default SendMoney;
