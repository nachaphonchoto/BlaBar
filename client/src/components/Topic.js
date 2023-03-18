import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Edit from './Edit';
import Delete from './Delete';

export default function Topic({title, _id, mode, detail}) {

  let navigate = useNavigate();
  const toChat = () => {
    navigate(`/Topic/Chat/${_id}`, { replace: true });
  }

  return (
    <div>
      {mode === 0 ?
        <Card onClick={toChat} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-light-blue-background-design-image_405678.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography noWrap variant="body2" color="text.secondary">
                {detail}
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
      :
      <Card >
          <CardActionArea onClick={toChat} >
            <CardMedia
              component="img"
              height="140"
              image="https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-light-blue-background-design-image_405678.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography noWrap variant="body2" color="text.secondary">
                {detail}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack sx={{ p: 1 }} direction="row" spacing={2} justifyContent="flex-end">
            <Edit _id={_id} titletmp={title} detailtmp={detail}/>
            <Delete  _id={_id} titletmp={title} />
          </Stack>
          
        </Card>   
      }
      
    </div>
    
  );
}