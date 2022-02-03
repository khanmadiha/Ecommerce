import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles(() => ({
  btn: {
    height: "30px",
    width: "7.5rem",
    fontSize: "10px",
    background: "#477dc1",
    color: "black",
    fontWeight: "bold",
  },
}));

export default function AlertDialog({ product , addToCart}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.btn}
      >
        View Product
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{product.title}</DialogTitle>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt="ProductImage"
            style={{
              width: "10rem",
              height: "10rem",
            }}
          />
        </div>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {product.description}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="primary" className={classes.btn}
          
          style={{
            background:"#ffc000"
          }}
          onClick={()=>addToCart(product)}
          >
              Add To Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
