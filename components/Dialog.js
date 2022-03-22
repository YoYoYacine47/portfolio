import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InformationCircleIcon } from "@heroicons/react/outline";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <InformationCircleIcon onClick={handleClickOpen} className="h-5 w-5" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"use Terminal to:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className="pl-2">
              <span className="font-bold">chmod:</span> change the theme (dark,
              light)
            </p>
            <p className="pl-2">
              {" "}
              <span className="font-bold">chlang:</span> change the language
              (ar, en)
            </p>
            <p className="pl-2">
              <span className="font-bold">cd:</span> navigate between sections
              (home, skills, education, portfolio, contact)
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
