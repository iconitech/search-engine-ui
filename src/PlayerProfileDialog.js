import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';

export default function PlayerProfileDialog({ open, onClose, playerData }) {
  if (!playerData) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Avatar 
            src={playerData.imageUrl} 
            alt={playerData.name}
            style={{ width: 100, height: 100, marginRight: 16 }} 
          />
          <div>
            <Typography variant="h4" component="div">{playerData.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{playerData.team}</Typography>
          </div>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box marginBottom={2}>
          <Typography variant="h6">Player Stats:</Typography>
          <Divider />
          <Box marginTop={2}>
            {/* Example stats */}
            <Typography variant="body1">Goals: {playerData.stats.goals}</Typography>
            <Typography variant="body1">Assists: {playerData.stats.assists}</Typography>
            {/* Add more stats as required */}
          </Box>
        </Box>
        {/* Additional details can be added here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
