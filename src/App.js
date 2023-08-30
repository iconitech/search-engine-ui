import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Filters from "./Filters";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">IntraFind Software</Typography>
          <Box flexGrow={1} />
          <AccountCircle fontSize="large" />
        </Toolbar>
      </AppBar>
      <Box m={2} />
      <SearchBar />
      <Box display="flex" justifyContent="center" mb={3}>
        <Box width="80%">
          <Typography variant="body2">Results: 9,785</Typography>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Filters />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <SearchResults />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
