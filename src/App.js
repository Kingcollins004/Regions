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
          <Route element={<CreateProfile />} path="create-profile" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
