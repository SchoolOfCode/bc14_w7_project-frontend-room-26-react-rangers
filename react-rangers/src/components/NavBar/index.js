import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { SOCdata } from '../../SOCdata';


export default function NavBar(props) {
    const { functionality } = props;
    return  (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                {SOCdata.map(item => (
                    <ListItemButton key={item.id} onClick={() => {functionality(item.id)}}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
        )}