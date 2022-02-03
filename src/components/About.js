import React from "react";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    firstdiv: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "1rem",
      marginTop: "4rem",
    },
    image: {
      width: "39%",
      height: "30%",
    },
    bigpara: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },

    personSection: {
      display: "felx",
      flexDirection: "row",
      marginTop: "2rem",
    },
    articleOne: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    name: {
      textAlign: "center",
      fontFamily: "monteserrat",
      padding: "0.5rem",
      margin: "1rem",
      cursor: "pointer",
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
    },
    articleTwo: {
      display: "flex",
      flexDirection: "column",
    },
    medialinks: {
      color: "black",
      padding: "5px",
      cursor: "pointer",
    },

    activebtn: {
      color: "#2caeba",
      boxShadow: "0 2px #2caeba",
    },

    [theme.breakpoints.down("md")]: {
      firstdiv: {
        flexDirection: "column-reverse",
      },
      image: {
        width: "50%",
      },
      bigpara: {
        width: "100%",
      },

      personSection: {
        flexDirection: "column",
      },

      articleOne: {
        width: "100%",
        flexDirection: "row",
        marginBottom: "2rem",
        alignItems: "center",
      },
      articleTwo: {
        alignItems: "center",
        justifyContent: "center",
      },
      skilldiv: {
        textAlign: "center",
      },
    },

    [theme.breakpoints.down("sm")]: {
      firstdiv: {
        marginTop: "2rem",
      },
      name: {
        margin: "0",
      },
    },
  }));
const navigate = useNavigate()
  const btnData = ["kurtis", "juttis", "bangles", "potlis"];
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" style={{ fontFamily: "sans-serif" }}>
        <div className={classes.firstdiv}>
          <div className={classes.bigpara}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", fontFamily: "monteserrat" }}
            >
              Who We Are
            </Typography>
            <Typography>
              Lorem ipsun nagd hth ld askda wdih iwhdi iwdhoi oadopa Lorem ipsun
              nagd hth ld askda wdih iwhdi iwdhoi oadopa Lorem ipsun nagd hth ld
              askda wdih iwhdi iwdhoi oadopa Lorem ipsun nagd hth ld askda wdih
              iwhdi iwdhoi oadopa Lorem ipsun nagd hth ld askda wdih iwhdi
              iwdhoi oadopa Lorem ipsun nagd hth ld askda wdih iwhdi iwdhoi
              oadopa Lorem ipsun nagd hth ld askda wdih iwhdi iwdhoi oadopa
              Lorem ipsun nagd hth ld askda wdih iwhdi iwdhoi oadopa ... Lorem
              ipsun nagd hth ld
            </Typography>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {btnData.map((btn, index) => {
                return (
                  <Button
                  key = {index}
                    variant="contained"
                    onClick={() => {
                      navigate(`/${btn.toLowerCase()}`, {
                        replace: true,
                      });
                      window.scroll(0,0)
                    }}
                  >
                   {btn}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
