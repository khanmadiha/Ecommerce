import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cart: {
    display: "none",
    color: "black",
    background: "#ffc000",
    fontWeight: "bold",
  },
  [theme.breakpoints.down("sm")]: {
    cart: {
      display: "unset",
    },
  },
}));

const ProductsLabels = ({ text }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1rem",
      }}
    >
      <Typography
        variant="h5"
        style={{
          width: "100%",

          fontWeight: "bold",
        }}
      >
        {text}
      </Typography>
      <Button className={classes.cart} onClick={() => window.scroll(0, 5000)}>
        Cart
      </Button>
    </div>
  );
};

export default ProductsLabels;
