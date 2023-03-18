import Carousel from "../components/Carousel"
import Box from '@mui/material/Box';
import ImageMasonry from "../components/ImageMasonry";
import Stack  from "@mui/material/Stack";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

  const message = `BlaBar เป็นแนวคิดของการจัดงานประชุมแบบไม่เป็นทางการ (Unconference) ซึ่งเกิดขึ้นในปี ค.ศ. 2005 โดยผู้สร้างคือเจมส์ สันดอร์ส (James Sunner) 
  และเดนี วัชนียา (Gina Trapani) ที่ซีแอตเทิล แคมปัส (เขตเทคโนโลยีสูงในนครซานฟรานซิสโก) 
  ซึ่งเป็นการนำเสนอแนวคิดที่ไม่มีการกำหนดหัวข้อหรือวันเวลาให้กับผู้เข้าร่วม โดยให้ผู้เข้าร่วมเลือกหัวข้อที่สนใจและมานำเสนอ 
  โดยไม่จำเป็นต้องเป็นผู้เชี่ยวชาญในหัวข้อนั้นๆ อีกทั้งยังเป็นแพลตฟอร์มสำหรับการแลกเปลี่ยนความคิดเห็น และการสร้างความสัมพันธ์ระหว่างผู้เข้าร่วมกันด้วยกัน 
  ซึ่งเป็นที่มาของชื่อ Barcamp ที่มาจากคำว่า "unconference" และ "coworking space" ที่ให้ความหมายว่าเป็นการเปิดพื้นที่ให้ผู้เข้าร่วมเป็นเชิงบรรยาย 
  และการทำงานร่วมกันในสถานที่เดียวกันโดยไม่มีการกำหนดหัวข้อหรือเวลาให้กับผู้เข้าร่วม
  เป็นการจัดงานประชุมที่ให้โอกาสแก่ผู้เข้าร่วมที่ต้องการแลกเปลี่ยนความรู้ และประสบการณ์ที่เกี่ยวข้องกับหัวข้อต่างๆ ในรูปแบบที่ไม่เหมือนกับการประชุมที่มีกำหนดหัวข้อและวันเวลาแน่นอน 
  เนื่องจากผู้เข้าร่วมจะเป็นผู้กำหนดหัวข้อประชุม และเรียนรู้จากกันและกันเอง ทำให้มีความสนุกสนานและน่าตื่นเต้นในการแลกเปลี่ยนความรู้ รวมไปถึงเป็นโอกาสในการสร้างความสัมพันธ์กับผู้เข้าร่วมอื่นๆ 
  ซึ่งสามารถนำไปสู่การสร้างโครงการหรือธุรกิจร่วมกันได้ในอนาคต
  ในการจัด Barcamp จะไม่มีการเสียค่าใช้จ่ายใดๆ ทั้งสิ้น และไม่จำเป็นต้องลงทะเบียนล่วงหน้า 
  ผู้เข้าร่วมสามารถมาเข้าร่วมงานได้เลย โดยบางครั้ง Barcamp ยังจัดขึ้นโดยใช้ห้องสมุดสาธารณะหรือชุมชนเทคโนโลยีที่มีพื้นที่สาธารณะให้ใช้งาน 
  ทำให้เป็นโอกาสสำหรับนักเรียนหรือนักศึกษาที่สนใจเกี่ยวกับเทคโนโลยี และการเรียนรู้ในด้านต่างๆ มาเข้าร่วมโดยไม่มีค่าใช้จ่ายสูงหรือข้อจำกัดใดๆ
  `;

export default function HomePage () {
    return(
        <div className="HomePage">
            <Box sx={{ p: 4 ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
                <Carousel/>
                <h1>BlaBar คืออะไร?</h1>
                <Stack direction="row" spacing={2}>
                  <ImageMasonry/>  
                <StyledPaper
                    sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            <h1>BlaBar</h1>
                            <Typography>{message}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                </Stack>
            </Box>  
        </div>
    )
}