import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import './Chat.scss';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
	handleClose: () => void;
	open: boolean;
}

export default function Chat({open, handleClose}: Props ) {
  
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Чат
            </Typography>
          </Toolbar>
        </AppBar>
		<div className='chat__content'>

			<div className="chat__users">
				<div className="chat__user">Mihai</div>
				<div className="chat__user">Mihail</div>
			</div>

			<div className="messages">
				<div className="message">Привет, это моё первое сообщение!</div>
				<div className="message message--my">Мы никого не ждали, уходите отсюда!</div>
				<TextField
					sx={{marginTop: 'auto'}}
					id="input-with-icon-textfield"
					label="Отправить сообщение"
					InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SendIcon />
						</InputAdornment>
					),
					}}
					variant='filled'
					fullWidth
      			/>
			</div>
		</div>
		
        
      </Dialog>
    </React.Fragment>
  );
}