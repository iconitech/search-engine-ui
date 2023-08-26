import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';


function Filters() {
    return (
        <div>
        <Box marginBottom={2}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Category 1" />
                <FormControlLabel control={<Checkbox />} label="Category 2" />
                <FormControlLabel control={<Checkbox />} label="Category 3" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Data Source</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="File Share" />
                <FormControlLabel control={<Checkbox />} label="SharePoint" />
                <FormControlLabel control={<Checkbox />} label="Web Crawler" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
  
        {/* Add more accordions for other filters as needed */}
      </div>
    );
  }

export default Filters;
