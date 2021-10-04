import React from "react";
import QuoteViewer from "./components/quoteviewer";

function App() {
  return (
    <div
      className="App-header"
      style={{
        // background: "linear-gradient(35deg, #CCFFFF, #FFCCCC)",
        fontFamily: "Helvetica Neue",
      }}
    >
      <header
        style={{
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Classic Qoute App
        <hr></hr>
      </header>
      <QuoteViewer />
    </div>
  );
}

export default App;
