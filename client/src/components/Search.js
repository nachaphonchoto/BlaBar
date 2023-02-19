import React, { useState } from 'react';
import SearchList from './SearchList';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
    <section className="garamond">
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
      {searchList()}
    </section>
  );
}

export default Search;