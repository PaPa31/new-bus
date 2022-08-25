import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BusPlusTime from "./containers/BusPlusTime/BusPlusTime";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BusPlusTime />
        </Layout>
      </div>
    );
  }
}

export default App;
