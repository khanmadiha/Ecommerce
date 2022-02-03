import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Footer from "./Footer";

import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  topDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4rem",
  },
  leftDiv: {
    width: "50%",
  },
  maildiv: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  form: {
    textAlign: "center",
    marginTop: "2rem",
    "& .MuiTextField-root": {
      marginTop: theme.spacing(2),
      width: "100%",
    },
  },
  image: {
    width: "100px",
    height: "100px",
  },

  container: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginBottom: "3rem",
  },

  [theme.breakpoints.down("md")]: {
    topDiv: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    leftDiv: {
      width: "100%",
    },
    maildiv: {
      justifyContent: "center",
    },

    image: {
      display: "none",
    },
  },

  [theme.breakpoints.down("sm")]: {
    container: {
      width: "100%",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.topDiv}>
          <div className={classes.leftDiv}>
            <Typography
              variant="h3"
              style={{ fontFamily: "monteserrat" }}
              className={classes.bigtxt}
            >
              {" "}
              Get In Touch !{" "}
            </Typography>
            <Typography variant={"body2"}>
              {" "}
              contact us for more info & demo{" "}
            </Typography>

            <Typography variant={"body2"} className={classes.maildiv}>
              {" "}
              <MailIcon /> saheba@gmail.com{" "}
            </Typography>
          </div>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Your Name..."
                multiline
                maxRows={4}
                variant="outlined"
              />
              <TextField
                id="outlined-textarea"
                label="Email..."
                multiline
                variant="outlined"
              />
            </div>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={8}
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "1rem",
              width: "200px",
            }}
          >
            Submit
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
