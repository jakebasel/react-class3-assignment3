import React, { Component } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

class Catalog extends Component {
  state = {
    items: [],
  };

  // display elements on the screen
  render() {
    return (
      <div className="catalog-page">
        <h3>Our Amazing Catalog of {this.state.items.length} Surfboards </h3>

        {this.state.items.map((prod) => (
          <Item key={prod._id} prod ={prod}></Item>
        ))}
      </div>
    );
  }

  // called after the render function is executed
  componentDidMount() {
    // call service to get list of items
    var itemService = new ItemService();
    var items = itemService.getCatalog();
    this.setState({ items: items });
  }
}

export default Catalog;
