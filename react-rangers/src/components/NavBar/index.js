import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Collapse from '@mui/material/Collapse';
import { SOCdata } from '../../SOCdata';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function NavBar(props) {
    const { functionality } = props;
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(true);

    let week1 = SOCdata.slice(0,5);
    let week2 = SOCdata.slice(5,10);
  const handleWeek1Click = () => {
    setOpen1(!open1);
  };
  const handleWeek2Click = () => {
    setOpen2(!open2);
  };
    return  (
        <Box className="navBar" sx={{ width: '100%', maxWidth: 360, bgcolor: '#647C90', maxHeight: 500, color: "white", fontWeight: 600, borderRadius: 2, }}>

            <List component="nav" aria-label="main mailbox folders"
            sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '#647C90',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
        '& ul': { padding: 0 },
        borderRadius: 2,
      }}>
   {/* call the collapsible menu item here 
     give the menu the name of week 1
     do the below code for the first 5 items in SOCdata
     repeat for each week
    */}
    <ListItemButton onClick={handleWeek1Click}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 1" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
                {week1.map(item => (
                    
                    <ListItemButton key={item.id} onClick={() => {functionality(item.id)}}>
                        <ListItemIcon>
                            <InsertDriveFileIcon sx={{color:'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                ))}
                </List>
        </Collapse>


        <ListItemButton onClick={handleWeek2Click}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 2" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
                {week2.map(item => (
                    
                    <ListItemButton key={item.id} onClick={() => {functionality(item.id)}}>
                        <ListItemIcon>
                        <InsertDriveFileIcon sx={{color:'white'}}/>
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                ))}
                </List>
        </Collapse>
        <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 3" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 4" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 5" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 6" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 7" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 8" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>


      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 9" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>


      <ListItemButton onClick={console.log('sorry nothing here yet')}>
        <ListItemIcon>
        <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Week 10" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>



            </List>
        </Box>
        )}