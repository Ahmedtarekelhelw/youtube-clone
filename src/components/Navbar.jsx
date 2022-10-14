import { Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      bgcolor="#000"
      position="sticky"
      top={0}
      zIndex="9999"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height="45px" />
      </Link>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </Stack>
  );
};

export default React.memo(Navbar);
