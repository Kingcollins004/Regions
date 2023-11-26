import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SmallBusiness from "./Pages/SmallBusiness";
import Commercial from "./Pages/Commercial";
import Wealth from "./Pages/Wealth";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Transactions from "./Pages/Transactions";
import Verification from "./Pages/Verification";
import CreateProfile from "./Pages/CreateProfile";
import ConfirmEmail from "./Pages/ConfirmEmail";
import Card from "./Pages/Card";
import Account from "./Pages/Account";
import TransferSuccess from "./Components/TransferSuccess";
import LoginVerification from "./Pages/LoginVerification";
function App() {
  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          fontFamily: "Open Sans, sans-serif"
        },
      },
    },
  });

  let inactivityTimeout;

  const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
      // Redirect to the login page
      window.location.href = '/login';
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };

  const handleUserActivity = () => {
    resetInactivityTimeout();
    // Add any other activity-related logic here
  };

  React.useEffect(() => {
    // Add event listeners for user activity
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);

    // Initialize the inactivity timeout on component mount
    resetInactivityTimeout();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Login />} path="login" />
          <Route element={<SmallBusiness />} path="small-business" />
          <Route element={<Commercial />} path="commercial" />
          <Route element={<Wealth />} path="wealth" />
          <Route element={<Signup />} path="signup" />
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Transactions />} path="transactions" />
          <Route element={<Verification />} path="verification" />
          <Route element={<ConfirmEmail />} path="confirm-email" />
          <Route element={<CreateProfile />} path="create-profile" />
          <Route element={<Card />} path="cards" />
          <Route element={<Account />} path="account" />
          <Route element={<TransferSuccess />} path="transfer-success" />
          <Route element={<LoginVerification />} path="login-verification" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
