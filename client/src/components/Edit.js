
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import swal from 'sweetalert';
import axios from 'axios';


export default function Edit({_id, titletmp, detailtmp}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(titletmp);
  const [detail, setDetail] = useState(detailtmp);
  const token = localStorage.getItem('token');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let data = {
      title: title,
      detail: detail
    }
    
    try {
        axios.put(`http://localhost:3001/api/topic/${_id}`, data, {
            headers: {
              'x-auth-token': token
            }
        })
        .then(response => {
            if ('success' === response.data) {
                swal("สำเร็จ",  "เพิ่มหัวข้อสำเร็จ" ,"success", {
                  buttons: false,
                  timer: 2000,
                }).then(() => window.location.reload())
              } else {
                swal("ผิดพลาด", "เกิดข้อผิดพลาด ", "error");
              }
        })
        .catch(error => {
            swal("ผิดพลาด", "กรุณาใส่หัวข้อและรายละเอียด", "error");
        });
      
      
    } catch (error) {
      swal("ผิดพลาด", "เกิดข้อผิดพลาด", "error");
    }
  }

  return (
    <div>
    <IconButton color="primary"  onClick={handleClickOpen}>
        <EditIcon />
    </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>แก้ไขหัวข้อ : {titletmp}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ p: 1}}>
            <TextField  
              margin="normal"
              required
              id="outlined-basic" 
              label="ชื่อหัวข้อ" 
              variant="outlined" 
              value={title}
              onChange={e => setTitle(e.target.value)}/>
            <TextField
              margin="normal"
              required
              id="outlined-multiline-static"
              label="รายละเอียด"
              fullWidth
              multiline
              rows={4}
              value={detail}
              onChange={e => setDetail(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit} color="success" >ตกลง</Button>  
          <Button color="error" onClick={handleClose}>ยกเลิก</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}