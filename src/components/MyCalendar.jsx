import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { events } from "../events";
import {Box, IconButton, Typography, Modal, Card, CardActionArea, CardContent, CardMedia, CardActions, Button} from '@mui/material'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import "react-big-calendar/lib/css/react-big-calendar.css";

import Man from '../assets/man.png'
import zoom from '../assets/zoom.png'
import live from '../assets/live.png'
import CardIcon from "./CardIcon";


moment.locale("en-GB");
const localizer = momentLocalizer(moment);


const eventStyleGetter = (event, start, end, isSelected) => {
  const backgroundColor = event.colorEvento;
  const style = {
    backgroundColor,
    borderRadius: '5px',
    opacity: 0.8,
    border: '0px',
    display: 'block',
    boxShadow: '1px 1px 1px black'
  };
  return {
    style: style
  };
};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 605,
  height: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display:'flex',
  flexDirection: 'column'
};

const MyCalendar = () => {

  const [eventsData, setEventsData] = useState(events);
  const [open, setOpen] = useState(false);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);

  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{position: 'relative', width: '100vw', height: '100vh', p: 4, display: 'flex', alignItems:'center',justifyContent: 'center', gap:5, background: 'linear-gradient(90deg, rgba(15,246,53,0.7931547619047619) 0%, rgba(253,254,135,1) 53%, rgba(0,255,244,1) 99%)'
  }}>
        <Box sx={{height: '100%', width: '80%', p: 4, boxShadow:3,border:1, bgcolor: 'white', borderRadius: '16px'}}>
          <Calendar
              views={["day", "agenda", "work_week", "month"]}
              selectable
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={eventsData}
              style={{ height: "95%" }}
              onSelectEvent={(event) => alert(event.title)}
              onSelectSlot={handleOpen}
              eventPropGetter={eventStyleGetter}

            />

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box sx={{display:'flex', flexDirection: 'column',alignItems:'center', width: '100%', justifyContent: 'space-between', gap: 2}}>
                  <Box sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', borderBottom: 3}}> 
                  <CardIcon setOpen={setOpen} image={Man} title="Man Power" reqform="man" hoverColor="#fff59d" />
                  <CardIcon setOpen={setOpen} image={zoom} title="Zoom Meeting" reqform="zoom" hoverColor="#90caf9"  />
                  <CardIcon setOpen={setOpen} image={live} title="Live Streaming" reqform="live" hoverColor="#ffab91" />
                  </Box>
                  <Typography  sx={{fontWeight: 700, color: 'text.secondary'}} id="modal-modal-title" variant="h6" component="h2">
                    Type of Service
                  </Typography>
                </Box>
                
              </Box>
            </Modal>
        </Box>

      <Box sx={{height: '100%', width: '20%', p: 4, bgcolor: "white", borderRadius: '16px', }}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', border: 1, boxShadow:3, height: '100%', px: 4}}>
            <Box sx={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '100%',py: 1}}>
              <Typography variant="subtitle1" sx={{fontWeight: 700}}>Trinitian Center for Education and Technology</Typography>
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', color: '#f5f5f5', border: 1, p: 1, bgcolor: '#03a9f4', gap:1, boxShadow: 3, borderRadius: "10px" }}>
                <Typography variant="subtitle1" sx={{fontWeight: 700}}>8:30</Typography>
                <Typography variant="subtitle2" sx={{fontWeight: 600}}>to</Typography> 
                <Typography variant="subtitle1" sx={{fontWeight: 700}}>8:30</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MyCalendar