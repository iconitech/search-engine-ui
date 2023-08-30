import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';


function Filters() {
  const wordFrequencies = [
    { word: "IntraFind", frequency: 75 },
    { word: "Pizza", frequency: 45 },
    { word: "Germany", frequency: 20 },
  ];

  const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterSelect = (filter) => {
        setSelectedFilters(prev => [...prev, filter]);
    };

    const handleFilterDeselect = (filter) => {
        setSelectedFilters(prev => prev.filter(f => f !== filter));
    };

    const clearAllFilters = () => {
        setSelectedFilters([]);
    };
  return (
    <div>
      <Box marginBottom={2}>
      {selectedFilters.map((filter, index) => (
                    <Chip
                        key={index}
                        label={filter}
                        onDelete={() => handleFilterDeselect(filter)}
                        style={{ marginRight: '8px' }}
                    />
                ))}
                {selectedFilters.length > 0 && (
                    <Button variant="outlined" onClick={clearAllFilters}>
                        Clear All
                    </Button>
                )}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={selectedFilters.includes("Category 1")}
            onChange={(e) => {
                if (e.target.checked) {
                    handleFilterSelect("Category 1");
                } else {
                    handleFilterDeselect("Category 1");
                }
            }} />} label="Category 1" />
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
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Semantic Search</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {wordFrequencies.map((item, index) => (
              <Box key={index} mb={1}>
                <Typography variant="body2">{item.word}</Typography>
                <LinearProgress variant="determinate" value={item.frequency} />
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Add more accordions for other filters as needed */}
    </div>
  );
}

export default Filters;
