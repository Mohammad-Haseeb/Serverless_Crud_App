
import EditIcon from '@material-ui/icons/Edit';

import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';




import React ,{useRef,useState}from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const formStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));
  

export default function EditPopUp({id}) {
    const classes = useStyles();
    const formClasses = formStyles();
    const ref = useRef();
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  let handleSubmit=(e)=>{
    e.preventDefault();
    (async()=>{
           let api=await fetch('/.netlify/functions/update_data',{
             method:"post",
             body:JSON.stringify({id:id,data:ref.current.value})
           });
           setstate(api.json());
           console.log(state);

    })()
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}> 
           

           <Chip
                  style={{backgroundColor:"white"}}
                   size="small"
                    onClick={handleClickOpen}
                   label={<EditIcon/>}
                   
                   deleteIcon={<EditIcon/>}
                   />
           
           </div>
            <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
         <div>
         <form className={formClasses.root} onSubmit={handleSubmit} autoComplete="off">
      <TextField id="filled-basic" inputRef={ref} label="Filled" variant="filled" required />
      <br/>
      <Button  style={{width:"50px"}} type="submit" color="primary" variant="contained">
            Agree
          </Button>
      </form>
         </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
             Close
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}