import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CookieIcon from '@mui/icons-material/Cookie';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GroupsIcon from '@mui/icons-material/Groups';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

import Box from '@mui/material/Box';

const items = [
  {
    id: 1,
    title: 'start',
    time: "8.30am",
    detail: 'i dont know',
    icon: <LaptopMacIcon />
  },
  {
    id: 2,
    title: 'start',
    time: "8.30am",
    detail: 'i dont know',
    icon: <FastfoodIcon />
  },
  {
    id: 3,
    title: 'start',
    time: "8.30am",
    detail: 'i dont know',
    icon: <CookieIcon />
  },
  {
    id: 4,
    title: 'start',
    time: "8.30am",
    detail: 'i dont know',
    icon: <FreeBreakfastIcon />
  },
  {
    id: 5,
    title: 'start',
    time: "8.30am",
    detail: 'i dont know',
    icon: <GroupsIcon />
  },
  {
    id: 6,
    title: 'end',
    time: "8.30am",
    detail: 'i dont know',
    icon: <HowToRegIcon />
  },
  {
    id: 7,
    title: 'Bye',
    time: "8.30am",
    detail: 'i dont know',
    icon: <EmojiEmotionsIcon />
  },
  {
    id: 8,
    title: 'Bye',
    time: "8.30am",
    detail: 'i dont know',
    icon: <HowToVoteIcon />
  },

]
  



export default function SchedulePage() {


  return (
    <div className='SchedulePage'>
      <Box sx={{ p: 4 ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
            <h1>ตารางเวลา</h1>
      </Box>
      <Box >
          <Timeline position="alternate">
          {items.map(({id,title,time,detail,icon}) => (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text.secondary"
                >
                  {time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    {icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    {title}
                  </Typography>
                  <Typography>{detail}</Typography>
                </TimelineContent>
              </TimelineItem>
            )
          )}
        </Timeline>
      </Box>
        
    </div>
    
  );
}