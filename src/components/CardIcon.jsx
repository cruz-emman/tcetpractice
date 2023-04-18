import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React, {useState} from 'react'
import FormFieldRequest from './FormFieldRequest';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 3,
};


const CardIcon = ({image, title,hoverColor,reqform, setOpen}) => {

  const [handleChildModal, setHandleChildModal] = useState(false);

  const handleChildOpen = () => {
    console.log('open');
    setHandleChildModal(true);
  };

  const handleChildClose = () => {
    console.log('close');
    setHandleChildModal(false);
    setOpen(false)
  };
  return (
    <>
      <Card
        sx={{
          border: 2,
          borderColor: { hoverColor },
          p: 1,
          height: '100%',
          width: '100%',
          maxWidth: 280,
          transition: 'all 0.2s ease-in-out',
          margin: '0 auto',
          ':hover': { backgroundColor: hoverColor },
          padding: '0.1em',
        }}
      >
        <CardActionArea
          onClick={handleChildOpen}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt="green iguana"
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <CardContent>
            <Typography
              sx={{ textAlign: 'center' }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box>
          <Modal
            open={handleChildModal}
            onClose={handleChildClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={style}>
              <FormFieldRequest type={reqform} />
            </Box>
          </Modal>
        </Box>
      </Card>
    </>
  );
}

export default CardIcon