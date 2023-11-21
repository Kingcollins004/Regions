import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profileImg from "../Assets/SVG/profileImg.svg";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import logo from "../Assets/SVG/logoW.svg";
import notification from "../Assets/SVG/notificationIcon.svg";
import user from "../Assets/SVG/userIcon.svg";
import settings from "../Assets/SVG/settingsIcon.svg";
import line from "../Assets/SVG/lineIcon.svg";
import { useMediaQuery } from "@chakra-ui/react";
import menu from "../Assets/SVG/menuW.svg";
import { useSelector } from "react-redux";

const Account = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const userInfo = useSelector((state) => state.user);
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setImage(selectedImage);
    }
  };

  return (
    <Box align="center" flexDirection="column">
      <Toaster position="top-center" reverseOrder={false} />
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
                <Text backgroundColor="#88BB00" padding="2% 4%">
                  <Link to="/account">Account</Link>
                </Text>
                <Text>
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
      <Flex flexDirection="column" marginY="2%" justifyContent="center">
        <Text fontSize="20px" fontWeight="600">
          Customer Account Information
        </Text>
        <Text fontSize="16px" fontWeight="400">
          View and update your account information on this page.
        </Text>
      </Flex>
      <Box marginTop="3%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {userInfo.Urlimage ? (
            <Box>
              <Image
                borderRadius="10px"
                width="80px"
                height="80px"
                src={userInfo.image}
                alt="Selected"
              />
              <label className="forTap" htmlFor="file">
                TAP TO CHANGE
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </Box>
          ) : (
            <div>
              <Image width="80%" src={profileImg} alt="Camera" />
              <label className="forTap" htmlFor="file">
                TAP TO CHANGE
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </div>
          )}
        </Flex>
      </Box>
      <Box
        boxShadow="1px 2px 4px 0px rgba(0, 0, 0, 0.2)"
        padding="1% 2%"
        marginTop="2%"
        borderRadius="30px"
        width={{ base: "95%", md: "38%" }}
        textAlign="left"
      >
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Full Name
          </Text>
          <Input
            placeholder={userInfo.fullName}
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </Box>

        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Phone Number
          </Text>
          <Input
            placeholder={userInfo.phoneNumber}
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Box>

        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Account Number
          </Text>
          <Input
            placeholder={userInfo.accountNumber}
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
          />
        </Box>

        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Account Type
          </Text>
          <Input
            placeholder={userInfo.accountType}
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            disabled
          />
        </Box>

        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            SSN
          </Text>
          <Input
            placeholder={userInfo.ssn}
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            disabled
          />
        </Box>

        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Address{" "}
          </Text>
          <Input
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder={userInfo.address}
            color="black"
          />
        </Box>

        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            State{" "}
          </Text>
          <Input
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={state}
            onChange={handleStateChange}
            placeholder={userInfo.state}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Country{" "}
          </Text>
          <Input
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={country}
            onChange={handleCountryChange}
            placeholder={userInfo.country}
          />
        </Box>
        <Flex
          justifyContent="center"
          marginTop="8%"
          marginBottom="3%"
          alignItems="center"
        >
          <Button
            backgroundColor="#528400"
            color="white"
            height="50px"
            borderRadius="25px"
            width="80%"
            onClick={""}
          >
            Complete Profile
          </Button>
        </Flex>
      </Box>
      <Text
        textAlign={{ base: "center", md: "left" }}
        marginTop={{ base: "7%", md: "1%" }}
        width={{ base: "85%", md: "100%" }}
        fontSize="13px"
      >
        Call <Link className="link">1-780-REGIONS (1-780-734-4647)</Link> or
        visit <Link className="link">Regions Help & Suppor</Link>t.
      </Text>
    </Box>
  );
};

export default Account;
