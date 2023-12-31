import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

// const Alert = ({errorMessage, alertType, setErrorMessage}) => {
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen("");
  
//     return (
//       <div>
//         {/* <Button onClick={handleOpen}>Open modal</Button> */}
//         <Modal
//           open={errorMessage}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//         <button >close</button>
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               {alertType === "danger" ? <i>x</i> : <i>v</i>}
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               {errorMessage}
//             </Typography>
//           </Box>
//         </Modal>
//       </div>
//     );
// }

// export default Alert