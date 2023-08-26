import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/lab/Pagination';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';


function SearchResults() {
  // Dummy data for now
  const results = [
    { title: 'Result 1', description: 'Description for Result 1', url: 'https://example.com/1' },
    { title: 'Result 2', description: 'Description for Result 2', url: 'https://example.com/2' },
    { title: 'Result 3', description: 'Description for Result 3', url: 'https://example.com/3' },
    { title: 'Result 4', description: 'Description for Result 4', url: 'https://example.com/4' },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
  setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
  setAnchorEl(null);
  };

  return (
    <div>
      <List style={{ paddingTop: 0 }}>
        {results.map((result, index) => (
          <Paper elevation={3} style={{ marginBottom: '10px', padding: '10px' }} key={index}>
            <ListItem>
            <ListItemAvatar>
    <Avatar alt={`Thumbnail ${index}`} src="/broken-image.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary={result.title}
    secondary={
      <>
        <Typography variant="body2" color="textPrimary">
          {result.description}
        </Typography>
        <Link href={result.url} target="_blank" rel="noopener">
          {result.url}
        </Link>
      </>
    }
  />
  <IconButton onClick={handleMenuClick}>
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
            </ListItem>
          </Paper>
        ))}
      </List>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Pagination count={10} />
      </Box>
    </div>
  );
}

export default SearchResults;
