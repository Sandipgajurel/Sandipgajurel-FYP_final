import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@iconify/react';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" style={{ background: `rgb(2,0,36)`,
                background: `linear-gradient(90deg, rgba(2,0,36,0.9668242296918768) 11%, rgba(20,9,121,0.9472163865546218) 43%, rgba(39,62,139,1) 59%, rgba(56,107,154,1) 91%, rgba(63,106,141,1) 100%, rgba(0,112,255,0.9500175070028011) 100%)`
            }} >

        <Toolbar>

          <Typography variant="h6" className={classes.title} style={{ textAlign: 'left', fontSize: '25px' }}>
            Online Bag Shop
          </Typography>
         
          

          {/* <a href="/ProductView" style={{color:'black',fontSize:'20px'}}>Products
            <VisibilityOutlinedIcon style={{ marginRight:'10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
          </a>
          <a href="/orderview" style={{color:'black',fontSize:'20px'}}>Orders
            <LocalMallRoundedIcon style={{ marginRight:'10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
          </a> */}
          <a href="/" style={{color:'white',fontSize:'20px'}}>Logout
            <LogoutIcon style={{ marginRight:'10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
          </a>

          

         
        </Toolbar>
        {/* <ModalDialog open={open} handleClose={handleClose} /> */}
      </AppBar>
    </>
  );
}
export default Navbar;