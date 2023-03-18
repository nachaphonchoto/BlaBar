import { Box } from "@mui/material"
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function Detail ( {data} ) {
    

    console.log(data)
    return(
        <div className="Detail">
            
                    <Box sx={{ p: 5}}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <Avatar  
                        alt="Remy Sharp"
                        // src={image}
                        sx={{ width: 80, height: 80 }} />
                        <div>
                           <h2>{data.title}</h2>   
                           <p>{data.date}</p>  
                        </div>   
                    </Stack>
                    <p>
                        {data.detail}
                    </p>
                    <h3>
                        presentation
                    </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yrTrKUIReM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Box> 
                 
        </div>
    )
}