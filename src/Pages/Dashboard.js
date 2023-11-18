import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import logo from "../Assets/SVG/logoW.svg";
import notification from "../Assets/SVG/notificationIcon.svg";
import settings from "../Assets/SVG/settingsIcon.svg";
import line from "../Assets/SVG/lineIcon.svg";
import backgorund from "../Assets/SVG/dashboardBackground.svg";
import { Link } from "react-router-dom";
import menu from "../Assets/SVG/menuW.svg";
import { useMediaQuery } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Feature/action";
import DashboardComp from "../Components/DashboardComp";
import DashbaordBAckgroundContent from "../Components/DashbaordBAckgroundContent";

const Dashboard = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;
  const db = getFirestore();
  const docRef = doc(db, "users", uid);

  useEffect(() => {
    const handleDashboard = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserData(userData);
          const userInfo = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            address: userData.address,
            phoneNumber: userData.phoneNumber,
            state: userData.state,
            country: userData.country,
            imageUrl: userData.image,
            balance: userData.Balance,
            euroAmount: userData.EuroAmount,
            savingsAmount: userData.savingsAmount,
          };
          dispatch(setUser(userInfo));
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user document: ", error);
      }
    };

    handleDashboard();
  }, []);

  return (
    <Box margin="0">
      <Box
        backgroundImage={backgorund}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        paddingX={{ base: "3%", md: "5%" }}
        height="550px"
      >
        {isMobile ? (
          <Flex
            paddingX={{ base: "1%", md: "10%" }}
            paddingTop="3%"
            justifyContent="space-between"
          >
            <Box flex="1">
              <Image width="50%" src={logo} />
            </Box>
            <Menu>
              <MenuButton
                marginRight="-5%"
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
              <Text backgroundColor="#88BB00" padding="2% 4%">
                <Link to="/dashboard">Overview</Link>
              </Text>
              <Text>
                <Link to="/account">Account</Link>
              </Text>
              <Text>
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

        <DashbaordBAckgroundContent />
      </Box>
      <DashboardComp />
    </Box>
  );
};

export default Dashboard;
