import React, { useContext } from "react";
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  {
    if (item.length === 0) {
      return (
        <>
        <div style={{backgroundColor : "#8FE3CF", width:"100%", height:"50px"}}><image src="logo.png" style={{width:"50px"}}></image></div>
          <section className="main-cart-section">
            
            <div className="para">
            <p className="total-items">
              You have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            </div>
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
        <div style={{backgroundColor : "#8FE3CF", width:"100%", height:"50px", marginLeft:"0%"}}></div>
          <section className="main-cart-section">
            
            <div className="para">
            <p className="total-items">
              You have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>
            </div>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                Card Total: <span> ₹{totalAmount} </span>
              </h3>
              
              <div className="buttons">
              <button onClick={clearCart} style={{marginRight:"5px"}}>Clear Cart</button>
              
              <button>Book Now</button>
              </div>  
            </div>
            
          </section>
        </>
      );
    }
  }
};

export default ContextCart;