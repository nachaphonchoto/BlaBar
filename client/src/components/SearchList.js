import React from 'react';
import Topic from './Topic';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';


function SearchList({ filteredTopics }) {
  const filtered = 
  
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
        {filteredTopics.map(topic =>  (
          <Grid item xs={2} sm={5} md={4} >
            <Topic title={topic.title} room={topic.room} />
          </Grid>
        ))}
      </Grid>
  </Box> 


  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;

