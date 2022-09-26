import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import Notify from "./notification";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Edit({ open, setOpen, setUsers, page, setNotifyopen }) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [company, setCompany] = useState();

  const handleClickOpen = () => {
    setOpen(1);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = async () => {
    const dear = await axios.post("https://interviewassignmentrajesh.herokuapp.com/user/createuser", {
      name: name,
      email: email,
      phonenumber: phonenumber,
      company: company,
    });
    const data = await axios.get(
      `https://interviewassignmentrajesh.herokuapp.com/user/getallusers/?page=${page}`
    );
    setUsers(data.data.users);
    setOpen(false);
    setNotifyopen(true);
  };

  return (
  
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
          <div >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add User
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <TextField
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "40vw" }}
            />
          </Typography>
          <Typography gutterBottom>
            <TextField
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "40vw" }}
            />
          </Typography>
          <Typography gutterBottom>
            <TextField
              placeholder="phone number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              style={{ width: "40vw" }}
            />
          </Typography>
          <Typography gutterBottom>
            <TextField
            style={{ width: "40vw" }}
              placeholder="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleChange()} color="primary" style={{ width: "40vw" }}>
            Save changes
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    
  );
}
