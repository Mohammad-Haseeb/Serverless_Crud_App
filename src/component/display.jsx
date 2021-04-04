import React from 'react';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import  EditPopUp from './Edit';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
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


export let DisplayComponents=()=>{
 
    return(
        <>
       <Paper className="DisplayStyle" elevation={4}>
      <div><h1>Hello</h1> </div>
      <div style={{display:'flex', marginTop:"3%",flexWrap:'wrap'}}> 
         <div style={{marginTop:"03px"}}>
          <EditPopUp />
          </div>
                   <DeleteIconComponent/>
         
 
          </div>
    
       
      
   
      
    </Paper>
      
     
    
        </>
    );
}

let DeleteIconComponent=()=>{
    const classes=useStyles();
    let handleClick=()=>{
        console.log("H")
    }
    return(
        <>
        <div className={classes.root}> 
           

        <Chip avatar={<DeleteIcon/>} style={{backgroundColor:"white"}} onClick={handleClick} />
           
           </div>
        </>
    );
}