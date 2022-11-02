import { Stack } from "@mui/material";
import { memo } from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ category, setCategory }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      overflow="auto"
      height={{ md: "95%" }}
      width="100%"
      pr={{ md: 3 }}
    >
      {categories.map((c) => (
        <li
          className="category-btn"
          key={c.name}
          style={{
            backgroundColor: c.name === category && "#FC1503",
            color: "#fff",
          }}
          onClick={() => setCategory(c.name)}
        >
          <span
            style={{
              color: c.name !== category && "#FC1503",
              marginRight: "10px",
            }}
          >
            {c.icon}
          </span>
          <span
            style={{
              opacity: c.name !== category && "0.8",
              width: "max-content",
            }}
          >
            {c.name}
          </span>
        </li>
      ))}
    </Stack>
  );
};

export default memo(Sidebar);
