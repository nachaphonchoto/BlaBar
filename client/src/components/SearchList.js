import React from 'react';
import Topic from './Topic';

function SearchList({ filteredTopics }) {
  const filtered = filteredTopics.map(topic =>  <Topic title={topic.title} room={topic.room} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;