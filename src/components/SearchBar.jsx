import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "0px 4px",
        mr: { sm: 3 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: { sm: 400, xs: 250 },
        borderRadius: 5,
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
