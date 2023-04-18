import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Meeting from '../../assets/meeting.png'
import Webinar from '../../assets/webinar.png'
import {AiOutlineUpload} from 'react-icons/ai'
import MeetingForm from './MeetingForm';



const checkboxOptions = [
  { value: 'tlc', label: 'TLC' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'fb', label: 'Facebook' },
  { value: 'none', label: 'None' },
];


export default function ZoomRequest() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [registration, setRegistration] = useState("No")
  const handleRegisterion = () =>{

  }



  const [streaming, setStreaming] = useState({})
  const handleStreaming = (event, newValue) =>{
    setStreaming({...streaming,
      [event.target.name]: event.target.checked})
  }


   
  const [recording, setRecording] = useState("No")
  const handleRecoding = (e, newValue) =>{
    setStreaming(newValue)
  }


  const [breakRoom, setBreakRoom] = useState('no');

  const handleBreakRoom = (event) => {
    setBreakRoom(event.target.value);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext  value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Meeting" value="1" />
            <Tab label="Webinar" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MeetingForm />
        </TabPanel>
        <TabPanel value="2">
        <MeetingForm />
        </TabPanel>
      </TabContext>
    </Box>
  );
}