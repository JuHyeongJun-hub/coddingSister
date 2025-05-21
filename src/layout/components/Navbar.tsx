import LoginButton from "../../common/components/LoginButton";
import { Box } from "@mui/material";
import React from "react";

const Navbar = () => {
  return <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            height="64px">
            <LoginButton></LoginButton>
        </Box>;
};

export default Navbar;