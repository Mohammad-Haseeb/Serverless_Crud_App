import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditPopUp from "./Edit";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "./../GlobalData/DataProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export let DisplayComponents = ({ value, id }) => {
  return (
    <>
      <Paper className="DisplayStyle" elevation={4}>
        <div>
          <h5>{value}</h5>{" "}
        </div>

        <div style={{ display: "flex", marginTop: "3%", flexWrap: "wrap" }}>
          <div style={{ marginTop: "03px" }}>
            <EditPopUp />
          </div>
          <DeleteIconComponent id={id} />
        </div>
      </Paper>
    </>
  );
};

let DeleteIconComponent = ({ id }) => {
  let context = useContext(Context);

  const classes = useStyles();
  let handleClick = () => {
    let index = context[0].findIndex((x) => x.id === id);

    let arr = context[0];
    arr.splice(index, 1);
    (async()=>{
      let api=await fetch('/.netlify/functions/delete_document',{
        method:"post",
        body:JSON.stringify({message:id}),
      });
    console.log(api);

    })()
    context[1]([...arr]);
  };
  return (
    <>
      <div className={classes.root}>
        <Chip
          avatar={<DeleteIcon />}
          style={{ backgroundColor: "white" }}
          onClick={handleClick}
        />
      </div>
    </>
  );
};
