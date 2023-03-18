import { Box } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Moment from 'react-moment';
import moment from 'moment';

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
                        src={data.avatar}
                        sx={{ width: 80, height: 80 }} />
                        <div>
                           <h1>{data.title}</h1> 
                           <p>ผู้สร้าง : {data.name}</p>    
                           <p>เริ่มขึ้นเมื่อ : 
                            <Moment format="Do MMMM YYYY, HH:mm:ss">{data.date}</Moment>
                            </p>  
                        </div>   
                    </Stack>
                    <h3>รายละเอียดของหัวข้อ </h3> 
                    <p>
                        {data.detail}
                    </p>
                    <h3>
                        presentation
                    </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_LzAfYUd70E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Box> 
                 
        </div>
    )
}