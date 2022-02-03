import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import formatCurrency from "../util";
import AlertDialog from "./ProductModal";

const useStyles = makeStyles(() => ({
  btn: {
    height: "30px",
    width: "7.5rem",
    fontSize: "10px",
    background: "#ffc000",
    color: "black",
    fontWeight: "bold",
  },
}));

const Products = ({ products, addToCart }) => {
  
  const classes = useStyles();
  return (
   <>
   {
     products.length === 0 ? 
     (
       <div
       style={{
         textAlign:"center"
       }}
       >
      <Typography
      style={{fontWeight:"bold" , marginTop:"5rem" , marginBottom:"5rem"}}
      variant="h4"
      >Comming Soon...</Typography>
       </div>
     ):(
      <div>
      <ul className="products">
        {products.map((product) => {
          const { id, title, image, price } = product;
          return (
            <li key={id}>
              <div className="product">
                <div>
                  <img src={image} alt={title} />
                  <p> {title} </p>
                </div>
              </div>
              <div className="product-price">
                <h3>{formatCurrency(price)}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <AlertDialog product={product} addToCart= {addToCart}/>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => addToCart(product)}
                    className={classes.btn}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
     )
   }
   
   </>
  );
};

export default Products;
