import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Topic({title, room}) {

  let navigate = useNavigate();

  return (
    <div onClick={() => navigate('Chat/' + room)} >
      <Card >
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  );
}