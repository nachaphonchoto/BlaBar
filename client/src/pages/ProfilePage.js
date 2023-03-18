import axios from 'axios';
import { useState, useEffect } from "react";
import Search from '../components/Search';
import Skeleton from '@mui/material/Skeleton';


export default function ProfilePage () {

    const [topics, setTopics] = useState();
    const token = localStorage.getItem('token');


    useEffect(() => { 
        if(!topics) {
             axios.get(`http://localhost:3001/api/users/topic`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => {
                console.log(response.data);
                setTopics(response.data);
            })
            .catch(error => {
                console.log(error);
            });  
        }
            
    });

    return(
        <div className="HomePage">
            <h1>ProfilePage</h1>
            {topics? <Search  topics={topics} mode={1}/> : 
            <Skeleton variant="rectangular" width={210} height={118} />
            }
            
        </div>
    )
}