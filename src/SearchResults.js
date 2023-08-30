import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Pagination from "@mui/lab/Pagination";
import Box from "@mui/material/Box";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import PlayerProfileDialog from "./PlayerProfileDialog";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function SearchResults() {
  // Dummy data for now
  const results = [
    {
      title: "Result 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      url: "https://example.com/1",
    },
    {
      title: "Result 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      url: "https://example.com/2",
    },
    {
      title: "Result 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      url: "https://example.com/3",
    },
    {
      title: "Result 4",
      description: "Description for Result 4",
      url: "https://example.com/4",
    },
  ];

  const dummyPlayerData = {
    imageUrl: "path-to-player-image.jpg", // Update with an actual path or URL
    name: "John Doe",
    team: "Dream Team FC",
    stats: {
      goals: 15,
      assists: 10,
      // Add more stats if needed
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openProfile, setOpenProfile] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  const handleOpenProfile = (profile) => {
    setCurrentProfile(dummyPlayerData); // Here's where we're using the dummy data
    setOpenProfile(true);
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  return (
    <div>
      <List style={{ paddingTop: 0 }}>
        {results.map((result, index) => (
          <Paper
            elevation={3}
            style={{
              marginBottom: "10px",
              padding: "10px",
              position: "relative",
            }}
            key={index}
          >
            <ListItem>
              {/* Placeholder Image with added right margin */}
              <ListItemAvatar style={{ marginRight: 10 }}>
                <img
                  src={`https://placehold.co/50x50?text=${result.type}`}
                  alt={`Thumbnail ${index}`}
                  style={{ width: 60, height: 60 }}
                />
              </ListItemAvatar>

              {/* Title, Description, and URL with adjusted spacing */}
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    component="span"
                    onClick={() => handleOpenProfile(result)}
                    style={{ cursor: "pointer", marginBottom: 8 }} // Added marginBottom for spacing
                  >
                    {result.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      style={{ marginBottom: 4 }}
                    >
                      {" "}
                      {/* Added marginBottom for spacing */}
                      {result.description}
                    </Typography>
                    <Link href={result.url} target="_blank" rel="noopener">
                      {result.url}
                    </Link>
                  </>
                }
              />
            </ListItem>

            {/* Favorite Star Icon */}
            <IconButton
              size="small"
              style={{ position: "absolute", top: 10, right: 40 }}
            >
              <StarBorderIcon />
            </IconButton>

            {/* Three-dot Menu */}
            <IconButton
              onClick={handleMenuClick}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
            </Menu>
          </Paper>
        ))}
      </List>
      <PlayerProfileDialog
        open={openProfile}
        onClose={handleCloseProfile}
        playerData={currentProfile}
      />
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Pagination count={10} />
      </Box>
    </div>
  );
}

export default SearchResults;
