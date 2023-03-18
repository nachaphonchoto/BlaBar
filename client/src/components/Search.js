import React, { useState } from 'react';
import SearchList from './SearchList';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Popup from './Popup';

import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';

function Search({ topics }) {

  const [searchField, setSearchField] = useState("");

  const filteredTopics = topics.filter(
    topic => {
      return (
        topic
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
        <SearchList filteredTopics={filteredTopics} />
    );
  }

  return (
    <section>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
        <Stack spacing={2} direction="row">
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Topic"
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange = {handleChange}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Popup/>
        </Stack>
      </Box>
      
      
      <Box sx={{ p: 2}}>
        {searchList()}
      </Box>
      
    </section>
  );
}

export default Search;