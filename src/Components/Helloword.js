import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
const Helloword = () => {
  
  return (
    <div>
        <h1>Helloword</h1>
        <Button variant='text'> first button</Button>
        <Stack direction="row" spacing={2}>
<Button variant="contained" color='green' >Second button success</Button>
<Button variant="outlined"   color='red'>Third button error</Button>
<Button disabled>Disabled</Button>
<Button href="text-buttons">Link</Button>
<Button color="secondary">Secondary</Button>
<br/>
<Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>

  
<Button variant="contained" endIcon={<SendIcon />}>Send </Button>

</Stack>
     

    </div>
   
      );
    }
  
export default Helloword;