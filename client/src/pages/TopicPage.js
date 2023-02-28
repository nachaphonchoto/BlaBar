import Search from '../components/Search';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function TopicPage () {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/topic')
          .then(response => {
            setTopics(response.data);
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    

    
    return(
        <div className='TopicPage'>
             <Search topics={topics}/>
        </div>
    )
}