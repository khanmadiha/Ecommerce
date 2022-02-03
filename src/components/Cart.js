import React, {   useState } from "react";
import formatCurrency from "../util";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

const Cart = ({ cartItems, removeFromCart, addOne, removeOne }) => {
  const [showChekOut, setShowCheckOut] = useState(false);
  const [pay, setPay] = useState(false);
  let total = formatCurrency(
    cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0)
  );
  const combineTotle = +total.substr(1, total.lenght) + +5 + +1;
  const notify = () => toast.success("Order Successfully Placed");







  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart Is Empty</div>
        ) : (
          <div className="cart cart-header">
            You Have {cartItems.length} Items In Your Cart
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => {
                const { id, image, title, price, count } = item;
                return (
                  <li key={id}>
                    <div>
                      <img src={image} alt={title} />
                    </div>
                    <div className="extraadd">
                      <button onClick={() => addOne(item)}>
                        <GrAddCircle />
                      </button>

                      <button onClick={() => removeOne(item)}>
                        <AiOutlineMinusCircle />
                      </button>
                    </div>
                    <div className="right">
                      <h5>{title}</h5>
                      <h3>
                        {" "}
                        {formatCurrency(price)} x {count} {"  "}{" "}
                      </h3>
                      <button
                        className="removebtn"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>{total}</div>
                  <button
                    className="button-primary"
                    onClick={() => {
                      setShowCheckOut(true);
                     
                    }}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <ToastContainer autoClose={2000} />
      </div>
      {showChekOut && cartItems.length > 0 && (
        <div className="container">
          {pay === true ? (
            <div
            style={{
              marginTop:"2rem"
            }}
            
            >
              <div style={{ display: "flex",    justifyContent: "space-between",
                     padding:"0 15px"}}>
                <Typography> Item : </Typography>
                <Typography>{total}</Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "space-between",
                  padding:"0 15px"
                }}
              >
                <Typography> Dilivery : </Typography>
                <Typography>$5</Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "space-between",
                  padding:"0 15px"
                }}
              >
                <Typography> Tax : </Typography>
                <Typography>$1</Typography>
              </div>

              <div
                style={{
                  width: "90%",
                  height: "2px",
                  margin: "20px",
                  borderBottom: "2px solid gray",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "space-between",
                  padding:"0 15px"
                 
                }}
              >
                <Typography> Total : </Typography>
                <Typography>${combineTotle}</Typography>
              </div>

             <div
             style={{
               display:"flex",
               flexDirection:"column",
               gap:"10px",
               alignItems:"center",
               marginTop:"1rem"
         
             }}
             >

             <Button
                variant="contained"
                color="primary"
                style={{
                  background: "green",
                  fontWeight: "bold",
                  width:"70%"
                  
                }}
                onClick={() => {
                  notify();
                  setShowCheckOut(false);
                  setPay(false);
                }}
              >
                Place Order
              </Button>

              <Button
                variant="contained"
                color="primary"
                style={{
                  background: "red",
                  fontWeight: "bold",
                  width:"70%"
                  
                }}
                onClick={() => {
                  setShowCheckOut(false);
                  setPay(false);
                }}
              >
                Cancel Order
              </Button>

             </div>
            </div>
          ) : (
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
            >
              <TextField
                required
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
                required
                variant="outlined"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  background: "green",
                  fontWeight: "bold",
                }}
                onClick={() => setPay(true)}
              >
                Proceed
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  background: "red",
                  fontWeight: "bold",
                }}
                onClick={() => setShowCheckOut(false)}
              >
                Cancel
              </Button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
