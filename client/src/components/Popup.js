
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { useState,useEffect } from "react";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function Popup() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Fab size="small" color="secondary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
    </Fab>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>เพิ่มหัวข้อ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <Box sx={{ p: 1}}>
            <TextField  id="outlined-basic" label="ชื่อหัวข้อ" variant="outlined" />
          </Box>
          <Box sx={{ p: 1}}>
            <TextField
            id="outlined-multiline-static"
            label="รายละเอียด"
            fullWidth
            multiline
            rows={4}
            />
          </Box>
            
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleClose}>ตกลง</Button>  
          <Button color="error" onClick={handleClose}>ยกเลิก</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}