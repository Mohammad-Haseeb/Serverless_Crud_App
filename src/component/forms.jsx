import React,{useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const buttonStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '75%',
    },
  },
}));

export let Forms=()=>{
    const classes = useStyles();
    const classesButton = buttonStyles();
    let reference=useRef();
let handleSubmit=(e)=>{

  e.preventDefault();
   console.log("value : ",reference.current.value);
} 

  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <div style={{display:"flex" , flexWrap:"wrap" }}>
        <div>
      <TextField id="outlined-basic"  inputRef={reference} label="Outlined" variant="outlined" required />
      </div>
      <div className={classesButton.root}>
      <Button variant="contained" type="submit" color="primary">Submit</Button>
      </div>
      </div>

    </form>
  );
}