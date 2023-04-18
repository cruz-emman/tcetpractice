import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, FormGroup, Button } from '@mui/material'
import React, {useState} from 'react'
import Meeting from '../../assets/meeting.png'


const checkboxOptions = [
    { value: 'tlc', label: 'TLC' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'fb', label: 'Facebook' },
    { value: 'none', label: 'None' },
  ];
  

const MeetingForm = () => {
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
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', gap: 2}}>
              <Box component="img" sx={{width: '60px', boxShadow: 3, borderRadius: '50% '}} src={Meeting} />
              <Typography variant="h6" color="text.disabled" sx={{fontWeight: 700}}>MEETING FORM</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-evenly', flexDirection: 'row', width: '100%', gap: 5}}>

                {/* LEFT SIDE */}
              <Box sx={{width: '100%', height: '100%'}}>

                  <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap:1}}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Title Of Zoom"
                      variant='standard'
                    />
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <TextField
                          required
                          name="start_time"
                          type="time"
                          label="Start"
                          id="outlined-required"
                          fullWidth
                          variant='standard'
                          defaultValue="12:00"

                        />
                        <Typography variant="subtitle1">To</Typography>
                        <TextField
                          required
                          name="start_time"
                          type="time"
                          label="Start"
                          id="outlined-required"
                          fullWidth
                          variant='standard'
                          defaultValue="12:00"
                          
                        />

                        <TextField  
                          name="date"
                          label="Date"
                          InputLabelProps={{ shrink: true, required: true }}
                          type="date"
                          fullWidth
                          variant='standard'
                          defaultValue={""} />
                    </Box>
                    
                    <Box sx={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                      <Box sx={{display: 'flex', flexDirection: 'column', py: 1}}>
                        <Typography color="text.disabled" sx={{fontWeight: 700, py:1}}>Others:</Typography> 
                        <Box sx={{display:'flex', flexDirection: 'column', marginLeft:1, alignItems:'flex-start', justifyContent: 'space-between'}}>
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">Registration</FormLabel>
                              <RadioGroup 
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="No"
                                name="radio-buttons-group"
                                onChange={handleRegisterion}
                                >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                              </RadioGroup>
                            </FormControl>

                            <FormGroup>
                            <FormLabel id="demo-radio-buttons-group-label">Streaming Platform</FormLabel>
                              <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                              {checkboxOptions.map((option) => (
                                <FormControlLabel
                                  key={option.value}
                                  control={<Checkbox checked={streaming[option.value] || false} onChange={handleStreaming} name={option.value} />}
                                  label={option.label}
                                />
                              ))}
                              </Box>
                            </FormGroup>


                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">Recording</FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="No"
                                name="radio-buttons-group"
                                onChange={handleStreaming}
                                >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                
                              </RadioGroup>
                            </FormControl>

                              
                              <FormControl sx={{display:'flex', gap: 1}}>
                                <FormLabel id="demo-radio-buttons-group-label">Upload Banner</FormLabel>
                                  <Button
                                  variant="contained"
                                  component="label"
                                  size="small"
                                >
                                  Upload Banner
                                  <input
                                    type="file"
                                    hidden
                                  />
                                </Button>
                              </FormControl>

                            
                            
                        </Box>

                        
                      </Box>

                      <Box >
                      <Typography color="text.disabled" sx={{fontWeight: 700, py:1}}>Dry Run:</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 1, width: '100%', alignItems: 'flex-end', 
                            justifyContent: 'center'}}>
                          <TextField
                            required
                            name="start_time"
                            type="time"
                            label="Start"
                            id="outlined-required"
                            fullWidth
                            variant='standard'
                            defaultValue="12:00"

                          />
                          <Typography sx={{placeItems:'center'}} variant="subtitle1">To</Typography>
                          <TextField
                            required
                            name="start_time"
                            type="time"
                            label="Start"
                            id="outlined-required"
                            fullWidth
                            variant='standard'
                            defaultValue="12:00"
                            
                          />

                          <TextField  
                            name="date"
                            label="Date"
                            InputLabelProps={{ shrink: true, required: true }}
                            type="date"
                            fullWidth
                            variant='standard'
                            defaultValue={""} />
                        </Box>
                      </Box>
                      
                    </Box>
                  </Box>
                                

              </Box>

                  {/* RIGHT SIDE */}
              <Box sx={{width: '100%', height: '100%'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: 2, height: '100%', width: '100%'}}>
                  <Typography color="text.disabled" sx={{fontWeight: 700,}}>Assistants:</Typography>
                  <Box sx={{display: 'flex', flexDirection: 'row', gap: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>

                  </Box>
                        <TextField
                          id="text-field"
                          label="Zoom Host / Co-Host"
                          variant="standard"
                          fullWidth
                          margin="normal"
                        />
                        <TextField
                          id="text-field"
                          label="Tech Assistants"
                          variant="standard"
                          placeholder='TCET / Others, please specify'
                          fullWidth
                          margin="normal"
                        />
                  <FormControl component="fieldset">
                    <FormLabel id="demo-radio-buttons-group-label">Break Out Room</FormLabel>
                      <Box sx={{display:'flex', flexDirection:'column'}}>
                        <RadioGroup
                      aria-label="radio-with-text-field"
                      name="radio-with-text-field"
                      value={breakRoom}
                      onChange={handleBreakRoom}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup> 
                    {breakRoom === 'yes' && (
                      <Box sx={{display: 'flex', flexDirection:'column', alignItemS:'center', justifyContent: 'center'}}>
                        <TableContainer component={Paper}>
                          <Typography>Format in CSV File</Typography>
                            <Table sx={{ width:'100%' }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Room</TableCell>
                                  <TableCell align="right">Name</TableCell>
                                  <TableCell align="right">Email</TableCell>
                                  
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                  <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Room 1</TableCell>
                                    <TableCell align="right">John Doe</TableCell>
                                    <TableCell align="right">JohnDoe@tua.edu.ph</TableCell>
                                  </TableRow>
                                  <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Room 1</TableCell>
                                    <TableCell align="right">John Doe</TableCell>
                                    <TableCell align="right">JohnDoe@tua.edu.ph</TableCell>
                                  </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        <Typography>Excel or CSV File only</Typography>
                        <Button variant="outlined" startIcon={<AiOutlineUpload />}>
                          Upload File
                        </Button>
                      </Box>  
                      
                    )}
                      </Box>
                    </FormControl>
                </Box>
              </Box>
            </Box>
            
          </Box>
  )
}

export default MeetingForm