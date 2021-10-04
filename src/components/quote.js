import React, { Component } from "react";

class Quote extends Component {
  render() {
    const { quote, author } = this.props;
    return (
      <div className="Quote">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ paddingTop: "2em", color: "#fff" }}>{quote}</h2>
          <h4 style={{ color: "grey" }}>{author}</h4>
        </div>
      </div>
    );
  }
}

export default Quote;
