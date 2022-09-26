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

export default function Edit({
  open,
  setOpen,
  edititem,
  setUsers,
  page,
  notifyopen,
  setNotifyopen,
}) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [company, setCompany] = useState();
  useEffect(() => {
    setEmail(edititem?.email);
    setName(edititem?.name);
    setPhonenumber(edititem?.phonenumber);
    setCompany(edititem?.company);
  }, [edititem]);

  const handleClickOpen = () => {
    setOpen(1);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = async (edititem) => {
    const dear = await axios.get(
      `http://localhost:9000/user/edituser/${edititem._id}`
    );
    console.log(edititem._id, email);
    const d = await axios.post("http://localhost:9000/user/edituser", {
      id: edititem._id,
      email: email,
    });
    const data = await axios.get(
      `http://localhost:9000/user/getallusers/?page=${page}`
    );
    setUsers(data.data.users);
    setOpen(false);
    setNotifyopen(true);
  };

  return (
    <div style={{ width: "40vw" }}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Email
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            <TextField
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Typography>
          <Typography gutterBottom>
            <TextField
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Typography>
          <Typography gutterBottom>
            <TextField
              placeholder="phone number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </Typography>
          <Typography gutterBottom>
            <TextField
              placeholder="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => handleChange(edititem)}
            color="primary"
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
