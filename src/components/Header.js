import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  typo: {
    fontWeight: "bold",
    fontSize: "1rem",
    paddingLeft: "8px",
  },

}));

const Header = () => {
  const classes = useStyles();
  // const [drawer , setDrawer] = useState()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Typography className={classes.typo}>
          <Link to="/">The Saheba Store</Link>
        </Typography>
        <Toolbar>
         
          
            <Drawer />
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
