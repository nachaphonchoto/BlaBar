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
    title: 'เริ่มลงทะเบียน',
    time: "8.30am",
    detail: 'ให้ผู้เข้าร่วมสามารถลงชื่อเพื่อมาเข้าร่วมงานได้',
    icon: <HowToRegIcon />
  },
  {
    id: 2,
    title: 'อาหารว่าง',
    time: "9.30am",
    detail: 'รับประทานอาหารว่าง กาแฟ น้ำชา และอื่นๆ',
    icon: <FreeBreakfastIcon />
  },
  {
    id: 3,
    title: 'เริ่มงาน',
    time: "10.30am",
    detail: 'ทำการเปิดงาน อธิบาย และพูดคุยกัน',
    icon: <GroupsIcon />
  },
  {
    id: 4,
    title: 'ลงทะเบียนหัวข้อ',
    time: "11.30am",
    detail: 'เปิดให้มีการลงทะเบียนหัวข้อผู้ที่จะทำการพูด',
    icon: <LaptopMacIcon />
  },
  {
    id: 5,
    title: 'พักรับประทานอาหาร',
    time: "12.30am",
    detail: 'รับประทานอาหารกลางวัน น้ำดื่ม กาแฟ น้ำชา และอื่นๆ',
    icon: <FastfoodIcon />
  },
  {
    id: 6,
    title: 'โหวตหัวข้อ',
    time: "13.30am",
    detail: 'ทำการโหวตหัวข้อที่สนใจ',
    icon: <HowToVoteIcon />
  },
  {
    id: 7,
    title: 'พูดคุยแลกเปลี่ยนความคิดเห็น',
    time: "14.30am",
    detail: 'i dont know',
    icon: <GroupsIcon />
  },
  {
    id: 8,
    title: 'แจกของที่ระลึก',
    time: "15.30am",
    detail: 'รับของที่ระลึกติดไม้ติดมือกลับบ้าน',
    icon: <CookieIcon />
  },
  {
    id: 9,
    title: 'ปิดงาน',
    time: "16.30am",
    detail: 'งานเลี้ยงย่อมมีวันเลิกลา แล้วพบกันใหม่',
    icon: <EmojiEmotionsIcon />
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