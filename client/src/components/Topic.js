import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Edit from './Edit';

export default function Topic({title, _id, mode, detail}) {

  let navigate = useNavigate();
  const toChat = () => {
    navigate(`/Topic/Chat/${_id}`, { replace: true });
  }

  return (
    <div>
      {mode === 0 ?
        <Card onClick={() => navigate(`/Chat/${_id}`)} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/photography/hub/CODERED_B1_macro_hero-img_900x420.jpg.img.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
              image="https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/photography/hub/CODERED_B1_macro_hero-img_900x420.jpg.img.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Stack sx={{ p: 1 }} direction="row" spacing={2} justifyContent="flex-end">
            <Edit _id={_id} titletmp={title} detailtmp={detail}/>
            <IconButton color="error" >
              <DeleteIcon />
            </IconButton>
          </Stack>
          
        </Card>   
      }
      
    </div>
    
  );
}