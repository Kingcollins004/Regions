import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  HStack,
  PinInput,
  PinInputField,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Verification = () => {
  const navigate = useNavigate();

 

  const { onClose } = useDisclosure();
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputContainerRef = useRef(null);
  const [timer, setTimer] = useState(90);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleVerify = () => {
    setShowModal(true);
    navigate("/create-profile");
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

  return (
    <Flex align="center" flexDirection="column">
      <Box marginTop={{ base: "5%", md: "2%" }}>
        <Image src={logo} />
      </Box>
      <Text
        marginTop="1%"
        fontSize={{ base: "24px", md: "52" }}
        fontWeight={{ base: "500", md: "300" }}
      >
        Create your account online
      </Text>
      <Text
        fontSize={{ base: "14px", md: "18px" }}
        marginTop="1%"
        fontWeight={{ base: "300", md: "600" }}
      >
        Verify your email address
      </Text>

      <Box paddingX="5%">
        <Box
          textAlign="center"
          margin={{ base: "15% 5%", md: "5% 5%" }}
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
    </Flex>
  );
};

export default Verification;
