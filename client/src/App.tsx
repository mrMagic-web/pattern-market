import * as React from "react";
import "./App.css";

import Header from "./components/Header";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="landing">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
