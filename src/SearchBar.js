import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";

function SearchBar() {
  const [searchType, setSearchType] = React.useState("type1");

  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="center" mb={3}>
      <Box width="80%">
        <AppBar position="static" color="default">
          <Toolbar>
            <Box display="flex" flexGrow={1} alignItems="center">
              <SearchIcon />
              <Box flexGrow={8}>
                <InputBase
                  fullWidth
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Box>
              <Box flexGrow={2}>
                <Select
                  value={searchType}
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                  style={{
                    marginLeft: "1rem",
                    color: "black",
                    background: "transparent",
                    border: "none",
                    textAlign: "right",
                  }}
                  disableUnderline
                >
                  <MenuItem value={"type1"}>Global</MenuItem>
                  <MenuItem value={"type2"}>Admin</MenuItem>
                  <MenuItem value={"type3"}>User</MenuItem>
                </Select>
              </Box>
              <SettingsIcon style={{ marginLeft: "15px" }} />{" "}
              {/* Settings icon added here */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default SearchBar;
