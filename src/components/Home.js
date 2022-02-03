import { Container, Typography } from "@material-ui/core";
import React from "react";
import HomePCards from "./HomePCards";
import logo from "./LogoImage/Logo Post.png"
import Footer from "./Footer";

const Home = () => {

  return (
    <>
      <Container maxWidth="lg"
      style = {{
       display:"flex",
       flexDirection:"column",
       alignItems:"center"
      }}
      >
        <img src={logo} alt="logo" 
        style={{
         height:"18rem",
         width:"18rem" ,
         marginTop : "3rem"
        }}
        />

        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
            }}
            variant="h3"
          >
            The Saheba Store !
          </Typography>
        </div>

        <HomePCards />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
