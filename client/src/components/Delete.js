
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import axios from 'axios';


export default function Delete({_id, titletmp}) {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('token');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        axios.delete(`http://localhost:3001/api/topic/${_id}`, {
            headers: {
              'x-auth-token': token
            }
        })
        .then(response => {
            if ('Topic deleted' === response.data.msg) {
                swal("สำเร็จ",  "ลบหัวข้อสำเร็จ" ,"success", {
                  buttons: false,
                  timer: 2000,
                }).then(() => window.location.reload())
              } else {
                swal("ผิดพลาด", "เกิดข้อผิดพลาด ", "error");
              }
        })
        .catch(error => {
            swal("ผิดพลาด", "เกิดข้อผิดพลาด", "error");
        });
      
      
    } catch (error) {
      swal("ผิดพลาด", "เกิดข้อผิดพลาด", "error");
    }
  }

  return (
    <div>
    <IconButton color="error"  onClick={handleClickOpen}>
        <DeleteIcon />
    </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>คุณแน่ใจหรือไม่ ? </DialogTitle>
        <DialogContent>
            <DialogContentText>
                คุณต้องการจะลบ {titletmp} ใช่หรือไม่ 
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit} color="success" >ตกลง</Button>  
          <Button color="error" onClick={handleClose}>ยกเลิก</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}