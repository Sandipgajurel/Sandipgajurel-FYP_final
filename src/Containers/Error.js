import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
const Error = () => {
    return <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        page not found alert — <strong>check it out!</strong>
      </Alert>
    
  }
  export default Error;