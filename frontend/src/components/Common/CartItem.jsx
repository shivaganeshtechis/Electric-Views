import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

const CartItem = ({ cart }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cart.id));
  };
  return (
    <>
      <div>
        <img
          src={"http://res.cloudinary.com/techis/" + cart.item.image}
          class="item-image"
          alt=""
        />
      </div>
      <div class="info">
        <div class="name">{cart.item.name}</div>
        <div class="info-bottom">
          <div class="price">$ {cart.item.price}</div>
          <div class="number">
            <span class="minus" onClick={clickMinusCart}>
              －
            </span>
            <span class="count">{cart.quantity}</span>
            <span class="plus" onClick={clickPlusCart}>
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
