import React, { Component } from "react";

class QuoteControl extends Component {
  render() {
    const { buttonDisplayName, clickHandler } = this.props;
    return (
      <div className="quote-box">
        <button
          className="button"
          style={{
            padding: "15px 32px",
            backgroundColor: "#1DA1F2",
            width: "12%",
            height: "100px",
            fontSize: "italic",
            borderRadius: "50em",
            display: "flex",
            alignItems: "center",
          }}
          id="new-quote"
          onClick={clickHandler}
        >
          {buttonDisplayName}
        </button>
      </div>
    );
  }
}

export default QuoteControl;
