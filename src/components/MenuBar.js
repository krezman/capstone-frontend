import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom"

const MenuBar = ()=>{
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton className='menuBtn'{...bindTrigger(popupState)}>
           <div className='menuLink'><MenuRoundedIcon sx={{fontSize: "50px"}}/></div> 
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link className="link" to="/">
              <div>Home</div>
          </Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className="link" to="/users/login">
              <div>Login</div>
          </Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className="link" to="/users/register">
              <div>Register</div>
          </Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default MenuBar