import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { cardData } from "../data"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});



export default function MediaCard() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          margin: "3rem 0",
        }}
      >
        {cardData.map((card, index) => {
          return (
            <Card
              className={classes.root}
              key={index}
              onClick={() => {
                navigate(`/${card.name.toLowerCase()}`, {
                  replace: true,
                });
                window.scroll(0, 0);
              }}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={card.image}
                  title={card.name.toUpperCase()}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
