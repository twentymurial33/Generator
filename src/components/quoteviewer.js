import React, { Component } from "react";
import Quote from "./quote";
import QuoteControl from "./quotecontrol";
import styles from "./quoteviewer.module.css";

class QuoteViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: false,
      isHidden: true,
      quote: [],
      author: "",
    };
    this.onShowQuote = this.onShowQuote.bind(this);
  }

  async onShowQuote() {
    await this.setState({ activeButton: !this.state.activeButton });
  }

  render() {
    let quotes;
    if (this.state.activeButton === true) {
      quotes = (
        <Quote
          quote="Life is not 10% always fair and just"
          author="Murial Anindo"
        />
      );
    }
    return (
      <div className={styles.header}>
        <div className="quote-box">
          <QuoteControl
            buttonDisplayName="Daily Quote"
            clickHandler={this.onShowQuote}
          />
          <h5>{quotes}</h5>
          <button className={styles.test} clickHandler>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteViewer;
