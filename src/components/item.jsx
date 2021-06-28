import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./item.css";

class Item extends Component {
  state = {};

  render() {
    return (
      <div className="item">
        <img className="product-image" src={"/images/products/" + this.props.prod.image} alt="item" />
        <h6 className="title">{this.props.prod.title}</h6>

        <div className="prices">
          <label className="info"> Total: </label>
          <label className="info"> Price: </label>
          <label className="total-value"> ${this.props.prod.price.toFixed(2)} </label>
          <label className="price-value"> ${this.props.prod.price.toFixed(2)} </label>
        </div>

        <div className="item-controls">
          <QuantityPicker></QuantityPicker>

          <button className="btn btn-sm btn-warning btn-add"> 
            <i className = "fa fa-cart-plus" aria-hidden="true"> </i>
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
